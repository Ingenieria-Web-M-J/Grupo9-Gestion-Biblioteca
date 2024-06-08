"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TransactionAvgAggregate = class TransactionAvgAggregate {
};
exports.TransactionAvgAggregate = TransactionAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TransactionAvgAggregate.prototype, "amount", void 0);
exports.TransactionAvgAggregate = TransactionAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TransactionAvgAggregate", {})
], TransactionAvgAggregate);
