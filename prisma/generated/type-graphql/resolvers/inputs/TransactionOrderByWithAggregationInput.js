"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionAvgOrderByAggregateInput_1 = require("../inputs/TransactionAvgOrderByAggregateInput");
const TransactionCountOrderByAggregateInput_1 = require("../inputs/TransactionCountOrderByAggregateInput");
const TransactionMaxOrderByAggregateInput_1 = require("../inputs/TransactionMaxOrderByAggregateInput");
const TransactionMinOrderByAggregateInput_1 = require("../inputs/TransactionMinOrderByAggregateInput");
const TransactionSumOrderByAggregateInput_1 = require("../inputs/TransactionSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TransactionOrderByWithAggregationInput = class TransactionOrderByWithAggregationInput {
};
exports.TransactionOrderByWithAggregationInput = TransactionOrderByWithAggregationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionOrderByWithAggregationInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionOrderByWithAggregationInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionOrderByWithAggregationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCountOrderByAggregateInput_1.TransactionCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCountOrderByAggregateInput_1.TransactionCountOrderByAggregateInput)
], TransactionOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionAvgOrderByAggregateInput_1.TransactionAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionAvgOrderByAggregateInput_1.TransactionAvgOrderByAggregateInput)
], TransactionOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionMaxOrderByAggregateInput_1.TransactionMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionMaxOrderByAggregateInput_1.TransactionMaxOrderByAggregateInput)
], TransactionOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionMinOrderByAggregateInput_1.TransactionMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionMinOrderByAggregateInput_1.TransactionMinOrderByAggregateInput)
], TransactionOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionSumOrderByAggregateInput_1.TransactionSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionSumOrderByAggregateInput_1.TransactionSumOrderByAggregateInput)
], TransactionOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.TransactionOrderByWithAggregationInput = TransactionOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionOrderByWithAggregationInput", {})
], TransactionOrderByWithAggregationInput);
