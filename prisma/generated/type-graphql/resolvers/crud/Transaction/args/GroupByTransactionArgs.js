"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTransactionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionOrderByWithAggregationInput_1 = require("../../../inputs/TransactionOrderByWithAggregationInput");
const TransactionScalarWhereWithAggregatesInput_1 = require("../../../inputs/TransactionScalarWhereWithAggregatesInput");
const TransactionWhereInput_1 = require("../../../inputs/TransactionWhereInput");
const TransactionScalarFieldEnum_1 = require("../../../../enums/TransactionScalarFieldEnum");
let GroupByTransactionArgs = class GroupByTransactionArgs {
};
exports.GroupByTransactionArgs = GroupByTransactionArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereInput_1.TransactionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionWhereInput_1.TransactionWhereInput)
], GroupByTransactionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionOrderByWithAggregationInput_1.TransactionOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTransactionArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionScalarFieldEnum_1.TransactionScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTransactionArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionScalarWhereWithAggregatesInput_1.TransactionScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionScalarWhereWithAggregatesInput_1.TransactionScalarWhereWithAggregatesInput)
], GroupByTransactionArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTransactionArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTransactionArgs.prototype, "skip", void 0);
exports.GroupByTransactionArgs = GroupByTransactionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTransactionArgs);
