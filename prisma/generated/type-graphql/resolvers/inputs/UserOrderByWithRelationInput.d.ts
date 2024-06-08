import { AccountOrderByRelationAggregateInput } from "../inputs/AccountOrderByRelationAggregateInput";
import { ProductOrderByRelationAggregateInput } from "../inputs/ProductOrderByRelationAggregateInput";
import { SessionOrderByRelationAggregateInput } from "../inputs/SessionOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TransactionOrderByRelationAggregateInput } from "../inputs/TransactionOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    emailVerified?: SortOrderInput | undefined;
    image?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    role?: "asc" | "desc" | undefined;
    accounts?: AccountOrderByRelationAggregateInput | undefined;
    sessions?: SessionOrderByRelationAggregateInput | undefined;
    Product?: ProductOrderByRelationAggregateInput | undefined;
    Transaction?: TransactionOrderByRelationAggregateInput | undefined;
}
