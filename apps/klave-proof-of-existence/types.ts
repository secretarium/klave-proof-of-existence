import { Context, JSON } from '@klave/sdk';
import {getDate, setLastIndex} from './utils';

@serializable
export class ErrorMessage {
    success!: boolean;
    message!: string;
}

@serializable
export class ProofOutput {
    success!: boolean;
    owner!: string;
    timestamp: i64;
    index: i64;
}

@serializable
export class IndexOutput {
    success!: boolean;
    index!: i64;
}

@serializable
export class HashInput {
    hash!: string
}

@serializable
export class StoreOutput {
    success!: boolean;
    hash!: string;
    timestamp!: i64;
    index!: i64;
}

@serializable
export class ProofValue {
    owner: string;
    timestamp: i64;
    index: i64;

    constructor(owner: string) {
        this.owner = owner;
        this.timestamp = getDate();
        this.index = setLastIndex();
    }
}