import { CategoryOrderByWithRelationInput } from "../inputs/CategoryOrderByWithRelationInput";
import { RatingOrderByWithRelationInput } from "../inputs/RatingOrderByWithRelationInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { TransactionOrderByRelationAggregateInput } from "../inputs/TransactionOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class ProductOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    description?: SortOrderInput | undefined;
    price?: SortOrderInput | undefined;
    image?: SortOrderInput | undefined;
    categoryId?: SortOrderInput | undefined;
    userId?: "asc" | "desc" | undefined;
    balance?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    rating?: RatingOrderByWithRelationInput | undefined;
    category?: CategoryOrderByWithRelationInput | undefined;
    creator?: UserOrderByWithRelationInput | undefined;
    Transaction?: TransactionOrderByRelationAggregateInput | undefined;
}
