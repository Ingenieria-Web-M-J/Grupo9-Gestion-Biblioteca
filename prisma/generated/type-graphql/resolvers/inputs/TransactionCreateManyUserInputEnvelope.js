"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateManyUserInput_1 = require("../inputs/TransactionCreateManyUserInput");
let TransactionCreateManyUserInputEnvelope = class TransactionCreateManyUserInputEnvelope {
};
exports.TransactionCreateManyUserInputEnvelope = TransactionCreateManyUserInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateManyUserInput_1.TransactionCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateManyUserInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TransactionCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
exports.TransactionCreateManyUserInputEnvelope = TransactionCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateManyUserInputEnvelope", {})
], TransactionCreateManyUserInputEnvelope);
