"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryNullableRelationFilter_1 = require("../inputs/CategoryNullableRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const FloatNullableFilter_1 = require("../inputs/FloatNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const ProductWhereInput_1 = require("../inputs/ProductWhereInput");
const RatingNullableRelationFilter_1 = require("../inputs/RatingNullableRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TransactionListRelationFilter_1 = require("../inputs/TransactionListRelationFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let ProductWhereUniqueInput = class ProductWhereUniqueInput {
};
exports.ProductWhereUniqueInput = ProductWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput_1.ProductWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput_1.ProductWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereInput_1.ProductWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereUniqueInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductWhereUniqueInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatNullableFilter_1.FloatNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatNullableFilter_1.FloatNullableFilter)
], ProductWhereUniqueInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductWhereUniqueInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], ProductWhereUniqueInput.prototype, "categoryId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ProductWhereUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ProductWhereUniqueInput.prototype, "balance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ProductWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ProductWhereUniqueInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingNullableRelationFilter_1.RatingNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingNullableRelationFilter_1.RatingNullableRelationFilter)
], ProductWhereUniqueInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryNullableRelationFilter_1.CategoryNullableRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryNullableRelationFilter_1.CategoryNullableRelationFilter)
], ProductWhereUniqueInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], ProductWhereUniqueInput.prototype, "creator", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionListRelationFilter_1.TransactionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionListRelationFilter_1.TransactionListRelationFilter)
], ProductWhereUniqueInput.prototype, "Transaction", void 0);
exports.ProductWhereUniqueInput = ProductWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductWhereUniqueInput", {})
], ProductWhereUniqueInput);
