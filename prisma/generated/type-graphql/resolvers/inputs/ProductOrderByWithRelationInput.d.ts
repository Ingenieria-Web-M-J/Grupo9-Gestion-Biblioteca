import { CategoryOrderByWithRelationInput } from "../inputs/CategoryOrderByWithRelationInput";
import { RatingOrderByWithRelationInput } from "../inputs/RatingOrderByWithRelationInput";
import { TransactionOrderByRelationAggregateInput } from "../inputs/TransactionOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class ProductOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    price?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    categoryId?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    balance?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    rating?: RatingOrderByWithRelationInput | undefined;
    category?: CategoryOrderByWithRelationInput | undefined;
    creator?: UserOrderByWithRelationInput | undefined;
    Transaction?: TransactionOrderByRelationAggregateInput | undefined;
}
