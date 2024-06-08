"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTransactionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneTransactionArgs_1 = require("./args/UpdateOneTransactionArgs");
const Transaction_1 = require("../../../models/Transaction");
const helpers_1 = require("../../../helpers");
let UpdateOneTransactionResolver = class UpdateOneTransactionResolver {
    async updateOneTransaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateOneTransactionResolver = UpdateOneTransactionResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Transaction_1.Transaction, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTransactionArgs_1.UpdateOneTransactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneTransactionResolver.prototype, "updateOneTransaction", null);
exports.UpdateOneTransactionResolver = UpdateOneTransactionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transaction_1.Transaction)
], UpdateOneTransactionResolver);
