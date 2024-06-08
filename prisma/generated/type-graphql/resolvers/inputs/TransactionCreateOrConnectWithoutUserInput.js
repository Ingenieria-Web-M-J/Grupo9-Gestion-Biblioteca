"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateOrConnectWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateWithoutUserInput_1 = require("../inputs/TransactionCreateWithoutUserInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionCreateOrConnectWithoutUserInput = class TransactionCreateOrConnectWithoutUserInput {
};
exports.TransactionCreateOrConnectWithoutUserInput = TransactionCreateOrConnectWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], TransactionCreateOrConnectWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateWithoutUserInput_1.TransactionCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionCreateWithoutUserInput_1.TransactionCreateWithoutUserInput)
], TransactionCreateOrConnectWithoutUserInput.prototype, "create", void 0);
exports.TransactionCreateOrConnectWithoutUserInput = TransactionCreateOrConnectWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateOrConnectWithoutUserInput", {})
], TransactionCreateOrConnectWithoutUserInput);
