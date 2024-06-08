"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateNestedManyWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateManyUserInputEnvelope_1 = require("../inputs/TransactionCreateManyUserInputEnvelope");
const TransactionCreateOrConnectWithoutUserInput_1 = require("../inputs/TransactionCreateOrConnectWithoutUserInput");
const TransactionCreateWithoutUserInput_1 = require("../inputs/TransactionCreateWithoutUserInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionCreateNestedManyWithoutUserInput = class TransactionCreateNestedManyWithoutUserInput {
};
exports.TransactionCreateNestedManyWithoutUserInput = TransactionCreateNestedManyWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateWithoutUserInput_1.TransactionCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateNestedManyWithoutUserInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutUserInput_1.TransactionCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateManyUserInputEnvelope_1.TransactionCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateManyUserInputEnvelope_1.TransactionCreateManyUserInputEnvelope)
], TransactionCreateNestedManyWithoutUserInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
exports.TransactionCreateNestedManyWithoutUserInput = TransactionCreateNestedManyWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateNestedManyWithoutUserInput", {})
], TransactionCreateNestedManyWithoutUserInput);
