import { Context, Ledger } from "@klave/sdk";

//temporary as long as we don't have the height
const indexTable = "index_table"

export function getDate(): i64 {
    //trusted_time is a unix timestamp in nano second, cast it in i64 and convert in ms
    const unixTimeStamp = i64.parse(Context.get("trusted_time")) / 1000000;
    //const date = new Date(unixTimeStamp);
    return unixTimeStamp;
}

export function getLastIndex(): i64 {
    //initialization
    const lastIndex = Ledger.getTable(indexTable).get("last_index");
    if (lastIndex.length === 0)
    {
        Ledger.getTable(indexTable).set("last_index", "0");
        return 0;
    }
    return i64.parse(lastIndex);
}

export function setLastIndex(): i64 {
    //initialization
    const lastIndex = getLastIndex() + 1;
    Ledger.getTable(indexTable).set("last_index", lastIndex.toString());
    return lastIndex;
}

export function getCurrentUser(): string {
    return Context.get('sender');
}