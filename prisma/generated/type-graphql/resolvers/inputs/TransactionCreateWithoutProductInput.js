"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutTransactionInput_1 = require("../inputs/UserCreateNestedOneWithoutTransactionInput");
let TransactionCreateWithoutProductInput = class TransactionCreateWithoutProductInput {
};
exports.TransactionCreateWithoutProductInput = TransactionCreateWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutProductInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionCreateWithoutProductInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateWithoutProductInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateWithoutProductInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutTransactionInput_1.UserCreateNestedOneWithoutTransactionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutTransactionInput_1.UserCreateNestedOneWithoutTransactionInput)
], TransactionCreateWithoutProductInput.prototype, "user", void 0);
exports.TransactionCreateWithoutProductInput = TransactionCreateWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateWithoutProductInput", {})
], TransactionCreateWithoutProductInput);
