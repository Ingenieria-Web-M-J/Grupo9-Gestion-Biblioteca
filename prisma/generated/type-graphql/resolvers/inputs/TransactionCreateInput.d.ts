import { ProductCreateNestedOneWithoutTransactionInput } from "../inputs/ProductCreateNestedOneWithoutTransactionInput";
import { UserCreateNestedOneWithoutTransactionInput } from "../inputs/UserCreateNestedOneWithoutTransactionInput";
export declare class TransactionCreateInput {
    id?: string | undefined;
    amount: number;
    type: string;
    createdAt?: Date | undefined;
    user: UserCreateNestedOneWithoutTransactionInput;
    product: ProductCreateNestedOneWithoutTransactionInput;
}
