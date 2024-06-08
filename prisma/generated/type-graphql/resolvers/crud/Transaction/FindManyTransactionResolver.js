"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTransactionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyTransactionArgs_1 = require("./args/FindManyTransactionArgs");
const Transaction_1 = require("../../../models/Transaction");
const helpers_1 = require("../../../helpers");
let FindManyTransactionResolver = class FindManyTransactionResolver {
    async transactions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindManyTransactionResolver = FindManyTransactionResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Transaction_1.Transaction], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTransactionArgs_1.FindManyTransactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyTransactionResolver.prototype, "transactions", null);
exports.FindManyTransactionResolver = FindManyTransactionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transaction_1.Transaction)
], FindManyTransactionResolver);
