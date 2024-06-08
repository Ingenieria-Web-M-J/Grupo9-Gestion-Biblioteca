"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionAvgAggregate_1 = require("../outputs/TransactionAvgAggregate");
const TransactionCountAggregate_1 = require("../outputs/TransactionCountAggregate");
const TransactionMaxAggregate_1 = require("../outputs/TransactionMaxAggregate");
const TransactionMinAggregate_1 = require("../outputs/TransactionMinAggregate");
const TransactionSumAggregate_1 = require("../outputs/TransactionSumAggregate");
let TransactionGroupBy = class TransactionGroupBy {
};
exports.TransactionGroupBy = TransactionGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionGroupBy.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionGroupBy.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCountAggregate_1.TransactionCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCountAggregate_1.TransactionCountAggregate)
], TransactionGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionAvgAggregate_1.TransactionAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionAvgAggregate_1.TransactionAvgAggregate)
], TransactionGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionSumAggregate_1.TransactionSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionSumAggregate_1.TransactionSumAggregate)
], TransactionGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionMinAggregate_1.TransactionMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionMinAggregate_1.TransactionMinAggregate)
], TransactionGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionMaxAggregate_1.TransactionMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionMaxAggregate_1.TransactionMaxAggregate)
], TransactionGroupBy.prototype, "_max", void 0);
exports.TransactionGroupBy = TransactionGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TransactionGroupBy", {})
], TransactionGroupBy);
