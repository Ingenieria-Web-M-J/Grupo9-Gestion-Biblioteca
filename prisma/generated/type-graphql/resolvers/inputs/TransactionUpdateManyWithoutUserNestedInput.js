"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateManyWithoutUserNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateManyUserInputEnvelope_1 = require("../inputs/TransactionCreateManyUserInputEnvelope");
const TransactionCreateOrConnectWithoutUserInput_1 = require("../inputs/TransactionCreateOrConnectWithoutUserInput");
const TransactionCreateWithoutUserInput_1 = require("../inputs/TransactionCreateWithoutUserInput");
const TransactionScalarWhereInput_1 = require("../inputs/TransactionScalarWhereInput");
const TransactionUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/TransactionUpdateManyWithWhereWithoutUserInput");
const TransactionUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/TransactionUpdateWithWhereUniqueWithoutUserInput");
const TransactionUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/TransactionUpsertWithWhereUniqueWithoutUserInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionUpdateManyWithoutUserNestedInput = class TransactionUpdateManyWithoutUserNestedInput {
};
exports.TransactionUpdateManyWithoutUserNestedInput = TransactionUpdateManyWithoutUserNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateWithoutUserInput_1.TransactionCreateWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutUserNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutUserInput_1.TransactionCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionUpsertWithWhereUniqueWithoutUserInput_1.TransactionUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutUserNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateManyUserInputEnvelope_1.TransactionCreateManyUserInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateManyUserInputEnvelope_1.TransactionCreateManyUserInputEnvelope)
], TransactionUpdateManyWithoutUserNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutUserNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutUserNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutUserNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutUserNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionUpdateWithWhereUniqueWithoutUserInput_1.TransactionUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutUserNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionUpdateManyWithWhereWithoutUserInput_1.TransactionUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutUserNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionScalarWhereInput_1.TransactionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutUserNestedInput.prototype, "deleteMany", void 0);
exports.TransactionUpdateManyWithoutUserNestedInput = TransactionUpdateManyWithoutUserNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateManyWithoutUserNestedInput", {})
], TransactionUpdateManyWithoutUserNestedInput);
