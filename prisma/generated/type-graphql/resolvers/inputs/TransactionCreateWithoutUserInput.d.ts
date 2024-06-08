import { ProductCreateNestedOneWithoutTransactionInput } from "../inputs/ProductCreateNestedOneWithoutTransactionInput";
export declare class TransactionCreateWithoutUserInput {
    id?: string | undefined;
    amount: number;
    type: string;
    createdAt?: Date | undefined;
    product: ProductCreateNestedOneWithoutTransactionInput;
}
