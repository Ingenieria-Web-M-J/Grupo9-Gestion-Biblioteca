"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountListRelationFilter_1 = require("../inputs/AccountListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const ProductListRelationFilter_1 = require("../inputs/ProductListRelationFilter");
const SessionListRelationFilter_1 = require("../inputs/SessionListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
const TransactionListRelationFilter_1 = require("../inputs/TransactionListRelationFilter");
let UserWhereInput = class UserWhereInput {
};
exports.UserWhereInput = UserWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], UserWhereInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], UserWhereInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], UserWhereInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], UserWhereInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountListRelationFilter_1.AccountListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountListRelationFilter_1.AccountListRelationFilter)
], UserWhereInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionListRelationFilter_1.SessionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionListRelationFilter_1.SessionListRelationFilter)
], UserWhereInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductListRelationFilter_1.ProductListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductListRelationFilter_1.ProductListRelationFilter)
], UserWhereInput.prototype, "Product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionListRelationFilter_1.TransactionListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionListRelationFilter_1.TransactionListRelationFilter)
], UserWhereInput.prototype, "Transaction", void 0);
exports.UserWhereInput = UserWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserWhereInput", {})
], UserWhereInput);
