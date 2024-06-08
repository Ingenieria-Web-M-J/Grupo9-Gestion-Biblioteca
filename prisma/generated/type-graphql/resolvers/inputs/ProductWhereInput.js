"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryNullableRelationFilter_1 = require("../inputs/CategoryNullableRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const FloatNullableFilter_1 = require("../inputs/FloatNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const RatingNullableRelationFilter_1 = require("../inputs/RatingNullableRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TransactionListRelationFilter_1 = require("../inputs/TransactionListRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let ProductWhereInput = class ProductWhereInput {
};
exports.ProductWhereInput = ProductWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatNullableFilter_1.FloatNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatNullableFilter_1.FloatNullableFilter)
], ProductWhereInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductWhereInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductWhereInput.prototype, "categoryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ProductWhereInput.prototype, "balance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ProductWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ProductWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingNullableRelationFilter_1.RatingNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingNullableRelationFilter_1.RatingNullableRelationFilter)
], ProductWhereInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryNullableRelationFilter_1.CategoryNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryNullableRelationFilter_1.CategoryNullableRelationFilter)
], ProductWhereInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], ProductWhereInput.prototype, "creator", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionListRelationFilter_1.TransactionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionListRelationFilter_1.TransactionListRelationFilter)
], ProductWhereInput.prototype, "Transaction", void 0);
exports.ProductWhereInput = ProductWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductWhereInput", {})
], ProductWhereInput);
