import { CategoryCreateNestedOneWithoutProductsInput } from "../inputs/CategoryCreateNestedOneWithoutProductsInput";
import { RatingCreateNestedOneWithoutProductInput } from "../inputs/RatingCreateNestedOneWithoutProductInput";
import { TransactionCreateNestedManyWithoutProductInput } from "../inputs/TransactionCreateNestedManyWithoutProductInput";
export declare class ProductCreateWithoutCreatorInput {
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
    Transaction?: TransactionCreateNestedManyWithoutProductInput | undefined;
}
