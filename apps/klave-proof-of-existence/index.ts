import { Notifier, Ledger, JSON } from '@klave/sdk';
import { StoreOutput, ErrorMessage, ProofValue, ProofOutput, HashInput, IndexOutput } from './types';
import { getCurrentUser, getLastIndex } from './utils';

const sumTable = "cogito_ergo_sum";

/**
 * @query
 * @param {HashInput} input
 */
export function fetchProof(input: HashInput): void {
    if (!input.hash) {
        Notifier.sendJson<ErrorMessage>({
            success: false,
            message: `Missing arguments`
        });
    }

    // hash is found and we provide the owner, timestamp and height
    let jsonStored = Ledger.getTable(sumTable).get(input.hash);
    if (jsonStored.length > 0) {
        let storedValue = JSON.parse<ProofValue>(jsonStored);
        Notifier.sendJson<ProofOutput>({
            success: true,
            owner: storedValue.owner,
            timestamp: storedValue.timestamp,
            index: storedValue.index
        });
        return;
    }

    Notifier.sendJson<ErrorMessage>({
        success: false,
        message: `Document with hash '${input.hash}' not found`
    });
}

/**
 * @query
 */
export function fetchIndex(): void {

    Notifier.sendJson<IndexOutput>({
        success: true,
        index: getLastIndex()
    });

}

/**
 * @transaction
 * @param {HashInput} input
 */
export function storeProof(input: HashInput): void {

    let jsonStored = Ledger.getTable(sumTable).get(input.hash);
    //hash has already been certified
    if (input.hash && jsonStored.length > 0) {
        let storedValue = JSON.parse<StoreOutput>(jsonStored);
        Notifier.sendJson<StoreOutput>({
            success: false,
            hash: input.hash,
            timestamp: storedValue.timestamp,
            index: storedValue.index
        });
        return;
    }

    //hash has never been certified and is thus immutably recorded
    if (input.hash) {
        let proofValue = new ProofValue(getCurrentUser());
        Ledger.getTable(sumTable).set(input.hash, JSON.stringify<ProofValue>(proofValue));
        Notifier.sendJson<StoreOutput>({
            success: true,
            hash: input.hash,
            timestamp: proofValue.timestamp,
            index: proofValue.index
        });
        return;
    }

    Notifier.sendJson<ErrorMessage>({
        success: false,
        message: `Missing arguments`
    });
}