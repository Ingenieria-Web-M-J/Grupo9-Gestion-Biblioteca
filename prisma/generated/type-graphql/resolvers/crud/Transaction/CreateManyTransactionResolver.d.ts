import type { GraphQLResolveInfo } from "graphql";
import { CreateManyTransactionArgs } from "./args/CreateManyTransactionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTransactionResolver {
    createManyTransaction(ctx: any, info: GraphQLResolveInfo, args: CreateManyTransactionArgs): Promise<AffectedRowsOutput>;
}
