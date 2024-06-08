"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTransactionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstTransactionArgs_1 = require("./args/FindFirstTransactionArgs");
const Transaction_1 = require("../../../models/Transaction");
const helpers_1 = require("../../../helpers");
let FindFirstTransactionResolver = class FindFirstTransactionResolver {
    async findFirstTransaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstTransactionResolver = FindFirstTransactionResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Transaction_1.Transaction, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTransactionArgs_1.FindFirstTransactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstTransactionResolver.prototype, "findFirstTransaction", null);
exports.FindFirstTransactionResolver = FindFirstTransactionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transaction_1.Transaction)
], FindFirstTransactionResolver);
