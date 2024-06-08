import type { GraphQLResolveInfo } from "graphql";
import { FindManyTransactionArgs } from "./args/FindManyTransactionArgs";
import { Transaction } from "../../../models/Transaction";
export declare class FindManyTransactionResolver {
    transactions(ctx: any, info: GraphQLResolveInfo, args: FindManyTransactionArgs): Promise<Transaction[]>;
}
