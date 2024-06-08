"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductOrderByWithRelationInput_1 = require("../inputs/ProductOrderByWithRelationInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TransactionOrderByWithRelationInput = class TransactionOrderByWithRelationInput {
};
exports.TransactionOrderByWithRelationInput = TransactionOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionOrderByWithRelationInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionOrderByWithRelationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionOrderByWithRelationInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionOrderByWithRelationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionOrderByWithRelationInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], TransactionOrderByWithRelationInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductOrderByWithRelationInput_1.ProductOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductOrderByWithRelationInput_1.ProductOrderByWithRelationInput)
], TransactionOrderByWithRelationInput.prototype, "product", void 0);
exports.TransactionOrderByWithRelationInput = TransactionOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionOrderByWithRelationInput", {})
], TransactionOrderByWithRelationInput);
