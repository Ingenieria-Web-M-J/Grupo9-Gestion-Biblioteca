"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionUpdateWithoutUserInput_1 = require("../inputs/TransactionUpdateWithoutUserInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionUpdateWithWhereUniqueWithoutUserInput = class TransactionUpdateWithWhereUniqueWithoutUserInput {
};
exports.TransactionUpdateWithWhereUniqueWithoutUserInput = TransactionUpdateWithWhereUniqueWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], TransactionUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateWithoutUserInput_1.TransactionUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionUpdateWithoutUserInput_1.TransactionUpdateWithoutUserInput)
], TransactionUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
exports.TransactionUpdateWithWhereUniqueWithoutUserInput = TransactionUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateWithWhereUniqueWithoutUserInput", {})
], TransactionUpdateWithWhereUniqueWithoutUserInput);
