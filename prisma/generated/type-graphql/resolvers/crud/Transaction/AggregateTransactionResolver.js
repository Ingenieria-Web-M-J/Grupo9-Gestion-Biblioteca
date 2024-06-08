"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTransactionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTransactionArgs_1 = require("./args/AggregateTransactionArgs");
const Transaction_1 = require("../../../models/Transaction");
const AggregateTransaction_1 = require("../../outputs/AggregateTransaction");
const helpers_1 = require("../../../helpers");
let AggregateTransactionResolver = class AggregateTransactionResolver {
    async aggregateTransaction(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
exports.AggregateTransactionResolver = AggregateTransactionResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTransaction_1.AggregateTransaction, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTransactionArgs_1.AggregateTransactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTransactionResolver.prototype, "aggregateTransaction", null);
exports.AggregateTransactionResolver = AggregateTransactionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transaction_1.Transaction)
], AggregateTransactionResolver);
