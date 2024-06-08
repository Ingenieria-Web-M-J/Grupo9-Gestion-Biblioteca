"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateNestedManyWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateManyProductInputEnvelope_1 = require("../inputs/TransactionCreateManyProductInputEnvelope");
const TransactionCreateOrConnectWithoutProductInput_1 = require("../inputs/TransactionCreateOrConnectWithoutProductInput");
const TransactionCreateWithoutProductInput_1 = require("../inputs/TransactionCreateWithoutProductInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionCreateNestedManyWithoutProductInput = class TransactionCreateNestedManyWithoutProductInput {
};
exports.TransactionCreateNestedManyWithoutProductInput = TransactionCreateNestedManyWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateWithoutProductInput_1.TransactionCreateWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateNestedManyWithoutProductInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutProductInput_1.TransactionCreateOrConnectWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateNestedManyWithoutProductInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateManyProductInputEnvelope_1.TransactionCreateManyProductInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateManyProductInputEnvelope_1.TransactionCreateManyProductInputEnvelope)
], TransactionCreateNestedManyWithoutProductInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateNestedManyWithoutProductInput.prototype, "connect", void 0);
exports.TransactionCreateNestedManyWithoutProductInput = TransactionCreateNestedManyWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateNestedManyWithoutProductInput", {})
], TransactionCreateNestedManyWithoutProductInput);
