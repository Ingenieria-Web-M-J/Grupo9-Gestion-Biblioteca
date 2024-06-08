"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTransactionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneTransactionArgs_1 = require("./args/DeleteOneTransactionArgs");
const Transaction_1 = require("../../../models/Transaction");
const helpers_1 = require("../../../helpers");
let DeleteOneTransactionResolver = class DeleteOneTransactionResolver {
    async deleteOneTransaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.DeleteOneTransactionResolver = DeleteOneTransactionResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Transaction_1.Transaction, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTransactionArgs_1.DeleteOneTransactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneTransactionResolver.prototype, "deleteOneTransaction", null);
exports.DeleteOneTransactionResolver = DeleteOneTransactionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transaction_1.Transaction)
], DeleteOneTransactionResolver);
