import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ProductScalarWhereInput {
    AND?: ProductScalarWhereInput[] | undefined;
    OR?: ProductScalarWhereInput[] | undefined;
    NOT?: ProductScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    price?: FloatNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    categoryId?: StringNullableFilter | undefined;
    userId?: StringFilter | undefined;
    balance?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
