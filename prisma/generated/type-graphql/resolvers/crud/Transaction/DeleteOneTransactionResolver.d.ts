import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneTransactionArgs } from "./args/DeleteOneTransactionArgs";
import { Transaction } from "../../../models/Transaction";
export declare class DeleteOneTransactionResolver {
    deleteOneTransaction(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTransactionArgs): Promise<Transaction | null>;
}
