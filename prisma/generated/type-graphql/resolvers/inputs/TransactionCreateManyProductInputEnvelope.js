"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateManyProductInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateManyProductInput_1 = require("../inputs/TransactionCreateManyProductInput");
let TransactionCreateManyProductInputEnvelope = class TransactionCreateManyProductInputEnvelope {
};
exports.TransactionCreateManyProductInputEnvelope = TransactionCreateManyProductInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateManyProductInput_1.TransactionCreateManyProductInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateManyProductInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], TransactionCreateManyProductInputEnvelope.prototype, "skipDuplicates", void 0);
exports.TransactionCreateManyProductInputEnvelope = TransactionCreateManyProductInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateManyProductInputEnvelope", {})
], TransactionCreateManyProductInputEnvelope);
