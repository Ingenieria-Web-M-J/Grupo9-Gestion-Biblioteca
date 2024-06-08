import { UserCreateNestedOneWithoutTransactionInput } from "../inputs/UserCreateNestedOneWithoutTransactionInput";
export declare class TransactionCreateWithoutProductInput {
    id?: string | undefined;
    amount: number;
    type: string;
    createdAt?: Date | undefined;
    user: UserCreateNestedOneWithoutTransactionInput;
}
