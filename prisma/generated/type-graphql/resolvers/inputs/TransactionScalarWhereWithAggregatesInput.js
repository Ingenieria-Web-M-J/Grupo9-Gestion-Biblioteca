"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const IntWithAggregatesFilter_1 = require("../inputs/IntWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let TransactionScalarWhereWithAggregatesInput = class TransactionScalarWhereWithAggregatesInput {
};
exports.TransactionScalarWhereWithAggregatesInput = TransactionScalarWhereWithAggregatesInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionScalarWhereWithAggregatesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], TransactionScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntWithAggregatesFilter_1.IntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntWithAggregatesFilter_1.IntWithAggregatesFilter)
], TransactionScalarWhereWithAggregatesInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], TransactionScalarWhereWithAggregatesInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], TransactionScalarWhereWithAggregatesInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], TransactionScalarWhereWithAggregatesInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], TransactionScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
exports.TransactionScalarWhereWithAggregatesInput = TransactionScalarWhereWithAggregatesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionScalarWhereWithAggregatesInput", {})
], TransactionScalarWhereWithAggregatesInput);
