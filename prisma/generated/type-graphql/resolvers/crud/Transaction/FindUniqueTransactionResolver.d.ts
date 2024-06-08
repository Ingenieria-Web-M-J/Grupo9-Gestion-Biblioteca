import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTransactionArgs } from "./args/FindUniqueTransactionArgs";
import { Transaction } from "../../../models/Transaction";
export declare class FindUniqueTransactionResolver {
    transaction(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTransactionArgs): Promise<Transaction | null>;
}
