import { UserCreateWithoutTransactionInput } from "../inputs/UserCreateWithoutTransactionInput";
import { UserUpdateWithoutTransactionInput } from "../inputs/UserUpdateWithoutTransactionInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutTransactionInput {
    update: UserUpdateWithoutTransactionInput;
    create: UserCreateWithoutTransactionInput;
    where?: UserWhereInput | undefined;
}
