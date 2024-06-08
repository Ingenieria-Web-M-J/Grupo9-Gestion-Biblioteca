import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { ProductCreateNestedManyWithoutCreatorInput } from "../inputs/ProductCreateNestedManyWithoutCreatorInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
import { TransactionCreateNestedManyWithoutUserInput } from "../inputs/TransactionCreateNestedManyWithoutUserInput";
export declare class UserCreateInput {
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
    Transaction?: TransactionCreateNestedManyWithoutUserInput | undefined;
}
