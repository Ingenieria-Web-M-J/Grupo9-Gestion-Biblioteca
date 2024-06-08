import { UserCountAccountsArgs } from "./args/UserCountAccountsArgs";
import { UserCountProductArgs } from "./args/UserCountProductArgs";
import { UserCountSessionsArgs } from "./args/UserCountSessionsArgs";
import { UserCountTransactionArgs } from "./args/UserCountTransactionArgs";
export declare class UserCount {
    accounts: number;
    sessions: number;
    Product: number;
    Transaction: number;
    getAccounts(root: UserCount, args: UserCountAccountsArgs): number;
    getSessions(root: UserCount, args: UserCountSessionsArgs): number;
    getProduct(root: UserCount, args: UserCountProductArgs): number;
    getTransaction(root: UserCount, args: UserCountTransactionArgs): number;
}
