import { RatingCreateNestedOneWithoutProductInput } from "../inputs/RatingCreateNestedOneWithoutProductInput";
import { TransactionCreateNestedManyWithoutProductInput } from "../inputs/TransactionCreateNestedManyWithoutProductInput";
import { UserCreateNestedOneWithoutProductInput } from "../inputs/UserCreateNestedOneWithoutProductInput";
export declare class ProductCreateWithoutCategoryInput {
    id?: string | undefined;
    title: string;
    description: string;
    price: number;
    image: string;
    balance?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    rating?: RatingCreateNestedOneWithoutProductInput | undefined;
    creator: UserCreateNestedOneWithoutProductInput;
    Transaction?: TransactionCreateNestedManyWithoutProductInput | undefined;
}
