"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_1 = require("../../../models/Product");
const Transaction_1 = require("../../../models/Transaction");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let TransactionRelationsResolver = class TransactionRelationsResolver {
    async user(transaction, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.findUniqueOrThrow({
            where: {
                id: transaction.id,
            },
        }).user({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async product(transaction, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.findUniqueOrThrow({
            where: {
                id: transaction.id,
            },
        }).product({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.TransactionRelationsResolver = TransactionRelationsResolver;
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Transaction_1.Transaction, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionRelationsResolver.prototype, "user", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Product_1.Product, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Info()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Transaction_1.Transaction, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionRelationsResolver.prototype, "product", null);
exports.TransactionRelationsResolver = TransactionRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transaction_1.Transaction)
], TransactionRelationsResolver);
