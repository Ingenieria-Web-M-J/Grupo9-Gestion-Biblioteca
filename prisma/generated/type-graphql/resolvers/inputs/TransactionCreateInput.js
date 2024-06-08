"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateNestedOneWithoutTransactionInput_1 = require("../inputs/ProductCreateNestedOneWithoutTransactionInput");
const UserCreateNestedOneWithoutTransactionInput_1 = require("../inputs/UserCreateNestedOneWithoutTransactionInput");
let TransactionCreateInput = class TransactionCreateInput {
};
exports.TransactionCreateInput = TransactionCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionCreateInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTransactionInput_1.UserCreateNestedOneWithoutTransactionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutTransactionInput_1.UserCreateNestedOneWithoutTransactionInput)
], TransactionCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutTransactionInput_1.ProductCreateNestedOneWithoutTransactionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedOneWithoutTransactionInput_1.ProductCreateNestedOneWithoutTransactionInput)
], TransactionCreateInput.prototype, "product", void 0);
exports.TransactionCreateInput = TransactionCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateInput", {})
], TransactionCreateInput);
