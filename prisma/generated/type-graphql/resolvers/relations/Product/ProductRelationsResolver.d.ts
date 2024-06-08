import type { GraphQLResolveInfo } from "graphql";
import { Category } from "../../../models/Category";
import { Product } from "../../../models/Product";
import { Rating } from "../../../models/Rating";
import { Transaction } from "../../../models/Transaction";
import { User } from "../../../models/User";
import { ProductRatingArgs } from "./args/ProductRatingArgs";
import { ProductTransactionArgs } from "./args/ProductTransactionArgs";
export declare class ProductRelationsResolver {
    rating(product: Product, ctx: any, info: GraphQLResolveInfo, args: ProductRatingArgs): Promise<Rating | null>;
    category(product: Product, ctx: any, info: GraphQLResolveInfo): Promise<Category>;
    creator(product: Product, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    Transaction(product: Product, ctx: any, info: GraphQLResolveInfo, args: ProductTransactionArgs): Promise<Transaction[]>;
}
