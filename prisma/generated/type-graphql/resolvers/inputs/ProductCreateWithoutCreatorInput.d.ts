import { CategoryCreateNestedOneWithoutProductsInput } from "../inputs/CategoryCreateNestedOneWithoutProductsInput";
import { RatingCreateNestedOneWithoutProductInput } from "../inputs/RatingCreateNestedOneWithoutProductInput";
import { TransactionCreateNestedManyWithoutProductInput } from "../inputs/TransactionCreateNestedManyWithoutProductInput";
export declare class ProductCreateWithoutCreatorInput {
    id?: string | undefined;
    title: string;
    description?: string | undefined;
    price?: number | undefined;
    image?: string | undefined;
    balance?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    rating?: RatingCreateNestedOneWithoutProductInput | undefined;
    category?: CategoryCreateNestedOneWithoutProductsInput | undefined;
    Transaction?: TransactionCreateNestedManyWithoutProductInput | undefined;
}
