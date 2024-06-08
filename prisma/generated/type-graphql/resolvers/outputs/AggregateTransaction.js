"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTransaction = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionAvgAggregate_1 = require("../outputs/TransactionAvgAggregate");
const TransactionCountAggregate_1 = require("../outputs/TransactionCountAggregate");
const TransactionMaxAggregate_1 = require("../outputs/TransactionMaxAggregate");
const TransactionMinAggregate_1 = require("../outputs/TransactionMinAggregate");
const TransactionSumAggregate_1 = require("../outputs/TransactionSumAggregate");
let AggregateTransaction = class AggregateTransaction {
};
exports.AggregateTransaction = AggregateTransaction;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCountAggregate_1.TransactionCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCountAggregate_1.TransactionCountAggregate)
], AggregateTransaction.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionAvgAggregate_1.TransactionAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionAvgAggregate_1.TransactionAvgAggregate)
], AggregateTransaction.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionSumAggregate_1.TransactionSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionSumAggregate_1.TransactionSumAggregate)
], AggregateTransaction.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionMinAggregate_1.TransactionMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionMinAggregate_1.TransactionMinAggregate)
], AggregateTransaction.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionMaxAggregate_1.TransactionMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionMaxAggregate_1.TransactionMaxAggregate)
], AggregateTransaction.prototype, "_max", void 0);
exports.AggregateTransaction = AggregateTransaction = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTransaction", {})
], AggregateTransaction);
