"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateWithWhereUniqueWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionUpdateWithoutProductInput_1 = require("../inputs/TransactionUpdateWithoutProductInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionUpdateWithWhereUniqueWithoutProductInput = class TransactionUpdateWithWhereUniqueWithoutProductInput {
};
exports.TransactionUpdateWithWhereUniqueWithoutProductInput = TransactionUpdateWithWhereUniqueWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], TransactionUpdateWithWhereUniqueWithoutProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateWithoutProductInput_1.TransactionUpdateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionUpdateWithoutProductInput_1.TransactionUpdateWithoutProductInput)
], TransactionUpdateWithWhereUniqueWithoutProductInput.prototype, "data", void 0);
exports.TransactionUpdateWithWhereUniqueWithoutProductInput = TransactionUpdateWithWhereUniqueWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateWithWhereUniqueWithoutProductInput", {})
], TransactionUpdateWithWhereUniqueWithoutProductInput);
