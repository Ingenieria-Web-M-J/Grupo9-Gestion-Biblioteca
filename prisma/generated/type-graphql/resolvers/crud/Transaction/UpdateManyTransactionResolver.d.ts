import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyTransactionArgs } from "./args/UpdateManyTransactionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTransactionResolver {
    updateManyTransaction(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTransactionArgs): Promise<AffectedRowsOutput>;
}
