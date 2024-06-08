"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionWhereInput_1 = require("../inputs/TransactionWhereInput");
let TransactionListRelationFilter = class TransactionListRelationFilter {
};
exports.TransactionListRelationFilter = TransactionListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereInput_1.TransactionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionWhereInput_1.TransactionWhereInput)
], TransactionListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereInput_1.TransactionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionWhereInput_1.TransactionWhereInput)
], TransactionListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereInput_1.TransactionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionWhereInput_1.TransactionWhereInput)
], TransactionListRelationFilter.prototype, "none", void 0);
exports.TransactionListRelationFilter = TransactionListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionListRelationFilter", {})
], TransactionListRelationFilter);
