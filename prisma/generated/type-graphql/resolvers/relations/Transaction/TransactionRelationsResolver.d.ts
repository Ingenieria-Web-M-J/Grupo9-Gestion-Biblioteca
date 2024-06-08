import type { GraphQLResolveInfo } from "graphql";
import { Product } from "../../../models/Product";
import { Transaction } from "../../../models/Transaction";
import { User } from "../../../models/User";
export declare class TransactionRelationsResolver {
    user(transaction: Transaction, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    product(transaction: Transaction, ctx: any, info: GraphQLResolveInfo): Promise<Product>;
}
