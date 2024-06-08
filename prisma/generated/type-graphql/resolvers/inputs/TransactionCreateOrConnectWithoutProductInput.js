"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateOrConnectWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateWithoutProductInput_1 = require("../inputs/TransactionCreateWithoutProductInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionCreateOrConnectWithoutProductInput = class TransactionCreateOrConnectWithoutProductInput {
};
exports.TransactionCreateOrConnectWithoutProductInput = TransactionCreateOrConnectWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], TransactionCreateOrConnectWithoutProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateWithoutProductInput_1.TransactionCreateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionCreateWithoutProductInput_1.TransactionCreateWithoutProductInput)
], TransactionCreateOrConnectWithoutProductInput.prototype, "create", void 0);
exports.TransactionCreateOrConnectWithoutProductInput = TransactionCreateOrConnectWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateOrConnectWithoutProductInput", {})
], TransactionCreateOrConnectWithoutProductInput);
