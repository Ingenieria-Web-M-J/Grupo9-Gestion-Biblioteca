import { ProductCountTransactionArgs } from "./args/ProductCountTransactionArgs";
export declare class ProductCount {
    Transaction: number;
    getTransaction(root: ProductCount, args: ProductCountTransactionArgs): number;
}
