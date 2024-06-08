import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
import { TransactionCreateNestedManyWithoutUserInput } from "../inputs/TransactionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutProductInput {
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
    Transaction?: TransactionCreateNestedManyWithoutUserInput | undefined;
}
