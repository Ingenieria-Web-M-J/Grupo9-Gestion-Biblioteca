"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateWithoutUserInput_1 = require("../inputs/TransactionCreateWithoutUserInput");
const TransactionUpdateWithoutUserInput_1 = require("../inputs/TransactionUpdateWithoutUserInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionUpsertWithWhereUniqueWithoutUserInput = class TransactionUpsertWithWhereUniqueWithoutUserInput {
};
exports.TransactionUpsertWithWhereUniqueWithoutUserInput = TransactionUpsertWithWhereUniqueWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], TransactionUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateWithoutUserInput_1.TransactionUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionUpdateWithoutUserInput_1.TransactionUpdateWithoutUserInput)
], TransactionUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateWithoutUserInput_1.TransactionCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionCreateWithoutUserInput_1.TransactionCreateWithoutUserInput)
], TransactionUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
exports.TransactionUpsertWithWhereUniqueWithoutUserInput = TransactionUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpsertWithWhereUniqueWithoutUserInput", {})
], TransactionUpsertWithWhereUniqueWithoutUserInput);
