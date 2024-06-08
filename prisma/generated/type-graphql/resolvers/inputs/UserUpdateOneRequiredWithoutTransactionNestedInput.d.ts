import { UserCreateOrConnectWithoutTransactionInput } from "../inputs/UserCreateOrConnectWithoutTransactionInput";
import { UserCreateWithoutTransactionInput } from "../inputs/UserCreateWithoutTransactionInput";
import { UserUpdateToOneWithWhereWithoutTransactionInput } from "../inputs/UserUpdateToOneWithWhereWithoutTransactionInput";
import { UserUpsertWithoutTransactionInput } from "../inputs/UserUpsertWithoutTransactionInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutTransactionNestedInput {
    create?: UserCreateWithoutTransactionInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutTransactionInput | undefined;
    upsert?: UserUpsertWithoutTransactionInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutTransactionInput | undefined;
}
