"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTransactionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateManyInput_1 = require("../../../inputs/TransactionCreateManyInput");
let CreateManyTransactionArgs = class CreateManyTransactionArgs {
};
exports.CreateManyTransactionArgs = CreateManyTransactionArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateManyInput_1.TransactionCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTransactionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyTransactionArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyTransactionArgs = CreateManyTransactionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTransactionArgs);
