"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTransactionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionWhereUniqueInput_1 = require("../../../inputs/TransactionWhereUniqueInput");
let FindUniqueTransactionArgs = class FindUniqueTransactionArgs {
};
exports.FindUniqueTransactionArgs = FindUniqueTransactionArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], FindUniqueTransactionArgs.prototype, "where", void 0);
exports.FindUniqueTransactionArgs = FindUniqueTransactionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTransactionArgs);
