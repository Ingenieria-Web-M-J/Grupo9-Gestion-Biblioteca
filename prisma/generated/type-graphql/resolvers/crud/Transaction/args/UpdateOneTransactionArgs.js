"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTransactionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionUpdateInput_1 = require("../../../inputs/TransactionUpdateInput");
const TransactionWhereUniqueInput_1 = require("../../../inputs/TransactionWhereUniqueInput");
let UpdateOneTransactionArgs = class UpdateOneTransactionArgs {
};
exports.UpdateOneTransactionArgs = UpdateOneTransactionArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateInput_1.TransactionUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionUpdateInput_1.TransactionUpdateInput)
], UpdateOneTransactionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], UpdateOneTransactionArgs.prototype, "where", void 0);
exports.UpdateOneTransactionArgs = UpdateOneTransactionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTransactionArgs);
