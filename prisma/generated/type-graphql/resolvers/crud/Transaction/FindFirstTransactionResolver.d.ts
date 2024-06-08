import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTransactionArgs } from "./args/FindFirstTransactionArgs";
import { Transaction } from "../../../models/Transaction";
export declare class FindFirstTransactionResolver {
    findFirstTransaction(ctx: any, info: GraphQLResolveInfo, args: FindFirstTransactionArgs): Promise<Transaction | null>;
}
