import { CategoryCreateNestedOneWithoutProductsInput } from "../inputs/CategoryCreateNestedOneWithoutProductsInput";
import { TransactionCreateNestedManyWithoutProductInput } from "../inputs/TransactionCreateNestedManyWithoutProductInput";
import { UserCreateNestedOneWithoutProductInput } from "../inputs/UserCreateNestedOneWithoutProductInput";
export declare class ProductCreateWithoutRatingInput {
    id?: string | undefined;
    title: string;
    description: string;
    price: number;
    image: string;
    balance?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    category: CategoryCreateNestedOneWithoutProductsInput;
    creator: UserCreateNestedOneWithoutProductInput;
    Transaction?: TransactionCreateNestedManyWithoutProductInput | undefined;
}
