import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TransactionScalarWhereWithAggregatesInput {
    AND?: TransactionScalarWhereWithAggregatesInput[] | undefined;
    OR?: TransactionScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TransactionScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    amount?: IntWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    productId?: StringWithAggregatesFilter | undefined;
    type?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
}
