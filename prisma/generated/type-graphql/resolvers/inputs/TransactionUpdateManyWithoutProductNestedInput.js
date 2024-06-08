"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateManyWithoutProductNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateManyProductInputEnvelope_1 = require("../inputs/TransactionCreateManyProductInputEnvelope");
const TransactionCreateOrConnectWithoutProductInput_1 = require("../inputs/TransactionCreateOrConnectWithoutProductInput");
const TransactionCreateWithoutProductInput_1 = require("../inputs/TransactionCreateWithoutProductInput");
const TransactionScalarWhereInput_1 = require("../inputs/TransactionScalarWhereInput");
const TransactionUpdateManyWithWhereWithoutProductInput_1 = require("../inputs/TransactionUpdateManyWithWhereWithoutProductInput");
const TransactionUpdateWithWhereUniqueWithoutProductInput_1 = require("../inputs/TransactionUpdateWithWhereUniqueWithoutProductInput");
const TransactionUpsertWithWhereUniqueWithoutProductInput_1 = require("../inputs/TransactionUpsertWithWhereUniqueWithoutProductInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionUpdateManyWithoutProductNestedInput = class TransactionUpdateManyWithoutProductNestedInput {
};
exports.TransactionUpdateManyWithoutProductNestedInput = TransactionUpdateManyWithoutProductNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateWithoutProductInput_1.TransactionCreateWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutProductNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutProductInput_1.TransactionCreateOrConnectWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutProductNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionUpsertWithWhereUniqueWithoutProductInput_1.TransactionUpsertWithWhereUniqueWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutProductNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateManyProductInputEnvelope_1.TransactionCreateManyProductInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateManyProductInputEnvelope_1.TransactionCreateManyProductInputEnvelope)
], TransactionUpdateManyWithoutProductNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutProductNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutProductNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutProductNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutProductNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionUpdateWithWhereUniqueWithoutProductInput_1.TransactionUpdateWithWhereUniqueWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutProductNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionUpdateManyWithWhereWithoutProductInput_1.TransactionUpdateManyWithWhereWithoutProductInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutProductNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionScalarWhereInput_1.TransactionScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdateManyWithoutProductNestedInput.prototype, "deleteMany", void 0);
exports.TransactionUpdateManyWithoutProductNestedInput = TransactionUpdateManyWithoutProductNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateManyWithoutProductNestedInput", {})
], TransactionUpdateManyWithoutProductNestedInput);
