"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTransactionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyTransactionArgs_1 = require("./args/UpdateManyTransactionArgs");
const Transaction_1 = require("../../../models/Transaction");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyTransactionResolver = class UpdateManyTransactionResolver {
    async updateManyTransaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyTransactionResolver = UpdateManyTransactionResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTransactionArgs_1.UpdateManyTransactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyTransactionResolver.prototype, "updateManyTransaction", null);
exports.UpdateManyTransactionResolver = UpdateManyTransactionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transaction_1.Transaction)
], UpdateManyTransactionResolver);
