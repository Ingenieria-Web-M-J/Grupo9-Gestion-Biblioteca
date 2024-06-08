import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneTransactionArgs } from "./args/UpsertOneTransactionArgs";
import { Transaction } from "../../../models/Transaction";
export declare class UpsertOneTransactionResolver {
    upsertOneTransaction(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTransactionArgs): Promise<Transaction>;
}
