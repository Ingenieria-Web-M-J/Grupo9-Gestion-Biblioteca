import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class TransactionScalarWhereInput {
    AND?: TransactionScalarWhereInput[] | undefined;
    OR?: TransactionScalarWhereInput[] | undefined;
    NOT?: TransactionScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    amount?: IntFilter | undefined;
    userId?: StringFilter | undefined;
    productId?: StringFilter | undefined;
    type?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}
