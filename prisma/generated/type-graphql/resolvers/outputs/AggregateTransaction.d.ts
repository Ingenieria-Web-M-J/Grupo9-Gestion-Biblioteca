import { TransactionAvgAggregate } from "../outputs/TransactionAvgAggregate";
import { TransactionCountAggregate } from "../outputs/TransactionCountAggregate";
import { TransactionMaxAggregate } from "../outputs/TransactionMaxAggregate";
import { TransactionMinAggregate } from "../outputs/TransactionMinAggregate";
import { TransactionSumAggregate } from "../outputs/TransactionSumAggregate";
export declare class AggregateTransaction {
    _count: TransactionCountAggregate | null;
    _avg: TransactionAvgAggregate | null;
    _sum: TransactionSumAggregate | null;
    _min: TransactionMinAggregate | null;
    _max: TransactionMaxAggregate | null;
}
