"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpsertWithWhereUniqueWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateWithoutProductInput_1 = require("../inputs/TransactionCreateWithoutProductInput");
const TransactionUpdateWithoutProductInput_1 = require("../inputs/TransactionUpdateWithoutProductInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionUpsertWithWhereUniqueWithoutProductInput = class TransactionUpsertWithWhereUniqueWithoutProductInput {
};
exports.TransactionUpsertWithWhereUniqueWithoutProductInput = TransactionUpsertWithWhereUniqueWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], TransactionUpsertWithWhereUniqueWithoutProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateWithoutProductInput_1.TransactionUpdateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionUpdateWithoutProductInput_1.TransactionUpdateWithoutProductInput)
], TransactionUpsertWithWhereUniqueWithoutProductInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateWithoutProductInput_1.TransactionCreateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionCreateWithoutProductInput_1.TransactionCreateWithoutProductInput)
], TransactionUpsertWithWhereUniqueWithoutProductInput.prototype, "create", void 0);
exports.TransactionUpsertWithWhereUniqueWithoutProductInput = TransactionUpsertWithWhereUniqueWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpsertWithWhereUniqueWithoutProductInput", {})
], TransactionUpsertWithWhereUniqueWithoutProductInput);
