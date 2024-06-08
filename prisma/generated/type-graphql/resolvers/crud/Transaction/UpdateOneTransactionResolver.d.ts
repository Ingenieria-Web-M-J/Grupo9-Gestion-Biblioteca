import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneTransactionArgs } from "./args/UpdateOneTransactionArgs";
import { Transaction } from "../../../models/Transaction";
export declare class UpdateOneTransactionResolver {
    updateOneTransaction(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTransactionArgs): Promise<Transaction | null>;
}
