import { ProductOrderByWithRelationInput } from "../inputs/ProductOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class TransactionOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    amount?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    productId?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    product?: ProductOrderByWithRelationInput | undefined;
}
