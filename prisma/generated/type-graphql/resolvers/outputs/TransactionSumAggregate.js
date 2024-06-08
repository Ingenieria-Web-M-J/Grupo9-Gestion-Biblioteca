"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TransactionSumAggregate = class TransactionSumAggregate {
};
exports.TransactionSumAggregate = TransactionSumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionSumAggregate.prototype, "amount", void 0);
exports.TransactionSumAggregate = TransactionSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TransactionSumAggregate", {})
], TransactionSumAggregate);
