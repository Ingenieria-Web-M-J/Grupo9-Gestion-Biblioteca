import { UserCreateWithoutProductInput } from "../inputs/UserCreateWithoutProductInput";
import { UserUpdateWithoutProductInput } from "../inputs/UserUpdateWithoutProductInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutProductInput {
    update: UserUpdateWithoutProductInput;
    create: UserCreateWithoutProductInput;
    where?: UserWhereInput | undefined;
}
