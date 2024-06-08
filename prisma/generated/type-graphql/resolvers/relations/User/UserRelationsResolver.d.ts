import type { GraphQLResolveInfo } from "graphql";
import { Account } from "../../../models/Account";
import { Product } from "../../../models/Product";
import { Session } from "../../../models/Session";
import { Transaction } from "../../../models/Transaction";
import { User } from "../../../models/User";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserProductArgs } from "./args/UserProductArgs";
import { UserSessionsArgs } from "./args/UserSessionsArgs";
import { UserTransactionArgs } from "./args/UserTransactionArgs";
export declare class UserRelationsResolver {
    accounts(user: User, ctx: any, info: GraphQLResolveInfo, args: UserAccountsArgs): Promise<Account[]>;
    sessions(user: User, ctx: any, info: GraphQLResolveInfo, args: UserSessionsArgs): Promise<Session[]>;
    Product(user: User, ctx: any, info: GraphQLResolveInfo, args: UserProductArgs): Promise<Product[]>;
    Transaction(user: User, ctx: any, info: GraphQLResolveInfo, args: UserTransactionArgs): Promise<Transaction[]>;
}
