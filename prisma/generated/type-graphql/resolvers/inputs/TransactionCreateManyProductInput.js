"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateManyProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TransactionCreateManyProductInput = class TransactionCreateManyProductInput {
};
exports.TransactionCreateManyProductInput = TransactionCreateManyProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateManyProductInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionCreateManyProductInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateManyProductInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TransactionCreateManyProductInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TransactionCreateManyProductInput.prototype, "createdAt", void 0);
exports.TransactionCreateManyProductInput = TransactionCreateManyProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateManyProductInput", {})
], TransactionCreateManyProductInput);
