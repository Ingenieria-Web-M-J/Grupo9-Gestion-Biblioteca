import { CategoryCreateNestedOneWithoutProductsInput } from "../inputs/CategoryCreateNestedOneWithoutProductsInput";
import { TransactionCreateNestedManyWithoutProductInput } from "../inputs/TransactionCreateNestedManyWithoutProductInput";
import { UserCreateNestedOneWithoutProductInput } from "../inputs/UserCreateNestedOneWithoutProductInput";
export declare class ProductCreateWithoutRatingInput {
    id?: string | undefined;
    title: string;
    description?: string | undefined;
    price?: number | undefined;
    image?: string | undefined;
    balance?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    category?: CategoryCreateNestedOneWithoutProductsInput | undefined;
    creator: UserCreateNestedOneWithoutProductInput;
    Transaction?: TransactionCreateNestedManyWithoutProductInput | undefined;
}
