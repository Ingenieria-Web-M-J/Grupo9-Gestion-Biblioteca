"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TransactionCreateManyUserInput = class TransactionCreateManyUserInput {
};
exports.TransactionCreateManyUserInput = TransactionCreateManyUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateManyUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionCreateManyUserInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateManyUserInput.prototype, "productId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateManyUserInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateManyUserInput.prototype, "createdAt", void 0);
exports.TransactionCreateManyUserInput = TransactionCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateManyUserInput", {})
], TransactionCreateManyUserInput);
