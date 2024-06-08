"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTransactionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateInput_1 = require("../../../inputs/TransactionCreateInput");
const TransactionUpdateInput_1 = require("../../../inputs/TransactionUpdateInput");
const TransactionWhereUniqueInput_1 = require("../../../inputs/TransactionWhereUniqueInput");
let UpsertOneTransactionArgs = class UpsertOneTransactionArgs {
};
exports.UpsertOneTransactionArgs = UpsertOneTransactionArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], UpsertOneTransactionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateInput_1.TransactionCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionCreateInput_1.TransactionCreateInput)
], UpsertOneTransactionArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateInput_1.TransactionUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionUpdateInput_1.TransactionUpdateInput)
], UpsertOneTransactionArgs.prototype, "update", void 0);
exports.UpsertOneTransactionArgs = UpsertOneTransactionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTransactionArgs);
