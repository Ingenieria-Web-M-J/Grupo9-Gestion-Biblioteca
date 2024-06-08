import { TransactionAvgOrderByAggregateInput } from "../inputs/TransactionAvgOrderByAggregateInput";
import { TransactionCountOrderByAggregateInput } from "../inputs/TransactionCountOrderByAggregateInput";
import { TransactionMaxOrderByAggregateInput } from "../inputs/TransactionMaxOrderByAggregateInput";
import { TransactionMinOrderByAggregateInput } from "../inputs/TransactionMinOrderByAggregateInput";
import { TransactionSumOrderByAggregateInput } from "../inputs/TransactionSumOrderByAggregateInput";
export declare class TransactionOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    amount?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    productId?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    _count?: TransactionCountOrderByAggregateInput | undefined;
    _avg?: TransactionAvgOrderByAggregateInput | undefined;
    _max?: TransactionMaxOrderByAggregateInput | undefined;
    _min?: TransactionMinOrderByAggregateInput | undefined;
    _sum?: TransactionSumOrderByAggregateInput | undefined;
}
