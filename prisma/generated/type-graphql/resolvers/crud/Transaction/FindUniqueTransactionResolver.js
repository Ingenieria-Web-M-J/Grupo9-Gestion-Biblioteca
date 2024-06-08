"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTransactionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueTransactionArgs_1 = require("./args/FindUniqueTransactionArgs");
const Transaction_1 = require("../../../models/Transaction");
const helpers_1 = require("../../../helpers");
let FindUniqueTransactionResolver = class FindUniqueTransactionResolver {
    async transaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindUniqueTransactionResolver = FindUniqueTransactionResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Transaction_1.Transaction, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTransactionArgs_1.FindUniqueTransactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueTransactionResolver.prototype, "transaction", null);
exports.FindUniqueTransactionResolver = FindUniqueTransactionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transaction_1.Transaction)
], FindUniqueTransactionResolver);
