"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTransactionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyTransactionArgs_1 = require("./args/DeleteManyTransactionArgs");
const Transaction_1 = require("../../../models/Transaction");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyTransactionResolver = class DeleteManyTransactionResolver {
    async deleteManyTransaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteManyTransactionResolver = DeleteManyTransactionResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTransactionArgs_1.DeleteManyTransactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyTransactionResolver.prototype, "deleteManyTransaction", null);
exports.DeleteManyTransactionResolver = DeleteManyTransactionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transaction_1.Transaction)
], DeleteManyTransactionResolver);
