"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTransactionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionUpdateManyMutationInput_1 = require("../../../inputs/TransactionUpdateManyMutationInput");
const TransactionWhereInput_1 = require("../../../inputs/TransactionWhereInput");
let UpdateManyTransactionArgs = class UpdateManyTransactionArgs {
};
exports.UpdateManyTransactionArgs = UpdateManyTransactionArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateManyMutationInput_1.TransactionUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionUpdateManyMutationInput_1.TransactionUpdateManyMutationInput)
], UpdateManyTransactionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereInput_1.TransactionWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionWhereInput_1.TransactionWhereInput)
], UpdateManyTransactionArgs.prototype, "where", void 0);
exports.UpdateManyTransactionArgs = UpdateManyTransactionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTransactionArgs);
