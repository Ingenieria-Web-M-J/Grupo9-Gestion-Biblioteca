import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTransactionOrThrowArgs } from "./args/FindUniqueTransactionOrThrowArgs";
import { Transaction } from "../../../models/Transaction";
export declare class FindUniqueTransactionOrThrowResolver {
    getTransaction(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTransactionOrThrowArgs): Promise<Transaction | null>;
}
