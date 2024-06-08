import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTransactionOrThrowArgs } from "./args/FindFirstTransactionOrThrowArgs";
import { Transaction } from "../../../models/Transaction";
export declare class FindFirstTransactionOrThrowResolver {
    findFirstTransactionOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstTransactionOrThrowArgs): Promise<Transaction | null>;
}
