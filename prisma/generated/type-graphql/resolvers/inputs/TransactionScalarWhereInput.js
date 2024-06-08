"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let TransactionScalarWhereInput = class TransactionScalarWhereInput {
};
exports.TransactionScalarWhereInput = TransactionScalarWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TransactionScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TransactionScalarWhereInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TransactionScalarWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TransactionScalarWhereInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TransactionScalarWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TransactionScalarWhereInput.prototype, "createdAt", void 0);
exports.TransactionScalarWhereInput = TransactionScalarWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionScalarWhereInput", {})
], TransactionScalarWhereInput);
