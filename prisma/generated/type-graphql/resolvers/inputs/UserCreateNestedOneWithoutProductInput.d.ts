import { UserCreateOrConnectWithoutProductInput } from "../inputs/UserCreateOrConnectWithoutProductInput";
import { UserCreateWithoutProductInput } from "../inputs/UserCreateWithoutProductInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutProductInput {
    create?: UserCreateWithoutProductInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutProductInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
