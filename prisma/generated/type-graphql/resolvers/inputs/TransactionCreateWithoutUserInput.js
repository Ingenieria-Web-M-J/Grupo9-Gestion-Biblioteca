"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateNestedOneWithoutTransactionInput_1 = require("../inputs/ProductCreateNestedOneWithoutTransactionInput");
let TransactionCreateWithoutUserInput = class TransactionCreateWithoutUserInput {
};
exports.TransactionCreateWithoutUserInput = TransactionCreateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionCreateWithoutUserInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutUserInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutTransactionInput_1.ProductCreateNestedOneWithoutTransactionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedOneWithoutTransactionInput_1.ProductCreateNestedOneWithoutTransactionInput)
], TransactionCreateWithoutUserInput.prototype, "product", void 0);
exports.TransactionCreateWithoutUserInput = TransactionCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateWithoutUserInput", {})
], TransactionCreateWithoutUserInput);
