import type { GraphQLResolveInfo } from "graphql";
import { GroupByTransactionArgs } from "./args/GroupByTransactionArgs";
import { TransactionGroupBy } from "../../outputs/TransactionGroupBy";
export declare class GroupByTransactionResolver {
    groupByTransaction(ctx: any, info: GraphQLResolveInfo, args: GroupByTransactionArgs): Promise<TransactionGroupBy[]>;
}
