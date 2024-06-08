import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class TransactionWhereInput {
    AND?: TransactionWhereInput[] | undefined;
    OR?: TransactionWhereInput[] | undefined;
    NOT?: TransactionWhereInput[] | undefined;
    id?: StringFilter | undefined;
    amount?: IntFilter | undefined;
    userId?: StringFilter | undefined;
    productId?: StringFilter | undefined;
    type?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    user?: UserRelationFilter | undefined;
    product?: ProductRelationFilter | undefined;
}
