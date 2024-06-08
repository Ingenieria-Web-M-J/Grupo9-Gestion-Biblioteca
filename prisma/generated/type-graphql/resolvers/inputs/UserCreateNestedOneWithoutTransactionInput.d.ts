import { UserCreateOrConnectWithoutTransactionInput } from "../inputs/UserCreateOrConnectWithoutTransactionInput";
import { UserCreateWithoutTransactionInput } from "../inputs/UserCreateWithoutTransactionInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutTransactionInput {
    create?: UserCreateWithoutTransactionInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutTransactionInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
