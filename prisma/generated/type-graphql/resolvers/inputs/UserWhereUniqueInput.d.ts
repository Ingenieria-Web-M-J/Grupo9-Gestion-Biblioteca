import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { SessionListRelationFilter } from "../inputs/SessionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TransactionListRelationFilter } from "../inputs/TransactionListRelationFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserWhereUniqueInput {
    id?: string | undefined;
    email?: string | undefined;
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    name?: StringFilter | undefined;
    emailVerified?: DateTimeNullableFilter | undefined;
    image?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    role?: StringFilter | undefined;
    accounts?: AccountListRelationFilter | undefined;
    sessions?: SessionListRelationFilter | undefined;
    Product?: ProductListRelationFilter | undefined;
    Transaction?: TransactionListRelationFilter | undefined;
}
