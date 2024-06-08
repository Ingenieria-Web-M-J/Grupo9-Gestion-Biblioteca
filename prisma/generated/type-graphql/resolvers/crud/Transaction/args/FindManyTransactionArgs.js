"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTransactionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionOrderByWithRelationInput_1 = require("../../../inputs/TransactionOrderByWithRelationInput");
const TransactionWhereInput_1 = require("../../../inputs/TransactionWhereInput");
const TransactionWhereUniqueInput_1 = require("../../../inputs/TransactionWhereUniqueInput");
const TransactionScalarFieldEnum_1 = require("../../../../enums/TransactionScalarFieldEnum");
let FindManyTransactionArgs = class FindManyTransactionArgs {
};
exports.FindManyTransactionArgs = FindManyTransactionArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereInput_1.TransactionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionWhereInput_1.TransactionWhereInput)
], FindManyTransactionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionOrderByWithRelationInput_1.TransactionOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTransactionArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], FindManyTransactionArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTransactionArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyTransactionArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionScalarFieldEnum_1.TransactionScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyTransactionArgs.prototype, "distinct", void 0);
exports.FindManyTransactionArgs = FindManyTransactionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyTransactionArgs);
