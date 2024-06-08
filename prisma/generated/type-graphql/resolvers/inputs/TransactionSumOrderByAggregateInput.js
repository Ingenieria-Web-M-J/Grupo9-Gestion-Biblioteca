"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TransactionSumOrderByAggregateInput = class TransactionSumOrderByAggregateInput {
};
exports.TransactionSumOrderByAggregateInput = TransactionSumOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionSumOrderByAggregateInput.prototype, "amount", void 0);
exports.TransactionSumOrderByAggregateInput = TransactionSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionSumOrderByAggregateInput", {})
], TransactionSumOrderByAggregateInput);
