"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTransactionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateInput_1 = require("../../../inputs/TransactionCreateInput");
let CreateOneTransactionArgs = class CreateOneTransactionArgs {
};
exports.CreateOneTransactionArgs = CreateOneTransactionArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateInput_1.TransactionCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionCreateInput_1.TransactionCreateInput)
], CreateOneTransactionArgs.prototype, "data", void 0);
exports.CreateOneTransactionArgs = CreateOneTransactionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTransactionArgs);
