import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyTransactionArgs } from "./args/DeleteManyTransactionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTransactionResolver {
    deleteManyTransaction(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTransactionArgs): Promise<AffectedRowsOutput>;
}
