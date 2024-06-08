import { UserCreateOrConnectWithoutProductInput } from "../inputs/UserCreateOrConnectWithoutProductInput";
import { UserCreateWithoutProductInput } from "../inputs/UserCreateWithoutProductInput";
import { UserUpdateToOneWithWhereWithoutProductInput } from "../inputs/UserUpdateToOneWithWhereWithoutProductInput";
import { UserUpsertWithoutProductInput } from "../inputs/UserUpsertWithoutProductInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutProductNestedInput {
    create?: UserCreateWithoutProductInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutProductInput | undefined;
    upsert?: UserUpsertWithoutProductInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutProductInput | undefined;
}
