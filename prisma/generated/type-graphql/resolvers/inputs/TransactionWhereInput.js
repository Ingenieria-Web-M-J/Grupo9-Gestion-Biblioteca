"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const ProductRelationFilter_1 = require("../inputs/ProductRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let TransactionWhereInput = class TransactionWhereInput {
};
exports.TransactionWhereInput = TransactionWhereInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TransactionWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TransactionWhereInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TransactionWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TransactionWhereInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TransactionWhereInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TransactionWhereInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], TransactionWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductRelationFilter_1.ProductRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductRelationFilter_1.ProductRelationFilter)
], TransactionWhereInput.prototype, "product", void 0);
exports.TransactionWhereInput = TransactionWhereInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionWhereInput", {})
], TransactionWhereInput);
