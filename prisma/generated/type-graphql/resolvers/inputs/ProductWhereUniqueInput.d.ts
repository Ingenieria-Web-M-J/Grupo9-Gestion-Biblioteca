import { CategoryNullableRelationFilter } from "../inputs/CategoryNullableRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProductWhereInput } from "../inputs/ProductWhereInput";
import { RatingNullableRelationFilter } from "../inputs/RatingNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TransactionListRelationFilter } from "../inputs/TransactionListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class ProductWhereUniqueInput {
    id?: string | undefined;
    AND?: ProductWhereInput[] | undefined;
    OR?: ProductWhereInput[] | undefined;
    NOT?: ProductWhereInput[] | undefined;
    title?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    price?: FloatNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    categoryId?: StringNullableFilter | undefined;
    userId?: StringFilter | undefined;
    balance?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    rating?: RatingNullableRelationFilter | undefined;
    category?: CategoryNullableRelationFilter | undefined;
    creator?: UserRelationFilter | undefined;
    Transaction?: TransactionListRelationFilter | undefined;
}
