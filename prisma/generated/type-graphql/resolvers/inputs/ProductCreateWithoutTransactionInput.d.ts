import { CategoryCreateNestedOneWithoutProductsInput } from "../inputs/CategoryCreateNestedOneWithoutProductsInput";
import { RatingCreateNestedOneWithoutProductInput } from "../inputs/RatingCreateNestedOneWithoutProductInput";
import { UserCreateNestedOneWithoutProductInput } from "../inputs/UserCreateNestedOneWithoutProductInput";
export declare class ProductCreateWithoutTransactionInput {
    id?: string | undefined;
    title: string;
    description: string;
    price: number;
    image: string;
    balance?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    rating?: RatingCreateNestedOneWithoutProductInput | undefined;
    category: CategoryCreateNestedOneWithoutProductsInput;
    creator: UserCreateNestedOneWithoutProductInput;
}
