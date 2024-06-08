import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ProductScalarWhereInput {
    AND?: ProductScalarWhereInput[] | undefined;
    OR?: ProductScalarWhereInput[] | undefined;
    NOT?: ProductScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    price?: FloatFilter | undefined;
    image?: StringFilter | undefined;
    categoryId?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    balance?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
