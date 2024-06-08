import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { ProductCreateNestedManyWithoutCreatorInput } from "../inputs/ProductCreateNestedManyWithoutCreatorInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutTransactionInput {
    id?: string | undefined;
    name: string;
    email: string;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    role?: string | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
    Product?: ProductCreateNestedManyWithoutCreatorInput | undefined;
}
