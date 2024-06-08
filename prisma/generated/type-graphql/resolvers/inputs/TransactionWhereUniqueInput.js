"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const ProductRelationFilter_1 = require("../inputs/ProductRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const TransactionWhereInput_1 = require("../inputs/TransactionWhereInput");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let TransactionWhereUniqueInput = class TransactionWhereUniqueInput {
};
exports.TransactionWhereUniqueInput = TransactionWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereInput_1.TransactionWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereInput_1.TransactionWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereInput_1.TransactionWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TransactionWhereUniqueInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TransactionWhereUniqueInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TransactionWhereUniqueInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TransactionWhereUniqueInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], TransactionWhereUniqueInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], TransactionWhereUniqueInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductRelationFilter_1.ProductRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductRelationFilter_1.ProductRelationFilter)
], TransactionWhereUniqueInput.prototype, "product", void 0);
exports.TransactionWhereUniqueInput = TransactionWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionWhereUniqueInput", {})
], TransactionWhereUniqueInput);
