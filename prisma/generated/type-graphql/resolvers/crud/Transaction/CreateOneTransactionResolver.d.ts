import type { GraphQLResolveInfo } from "graphql";
import { CreateOneTransactionArgs } from "./args/CreateOneTransactionArgs";
import { Transaction } from "../../../models/Transaction";
export declare class CreateOneTransactionResolver {
    createOneTransaction(ctx: any, info: GraphQLResolveInfo, args: CreateOneTransactionArgs): Promise<Transaction>;
}
