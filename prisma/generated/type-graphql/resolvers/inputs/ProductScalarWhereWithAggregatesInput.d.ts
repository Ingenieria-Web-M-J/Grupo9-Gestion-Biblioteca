import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ProductScalarWhereWithAggregatesInput {
    AND?: ProductScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProductScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProductScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    price?: FloatWithAggregatesFilter | undefined;
    image?: StringWithAggregatesFilter | undefined;
    categoryId?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    balance?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
