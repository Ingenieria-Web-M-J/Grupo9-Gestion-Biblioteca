"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateManyWithWhereWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionScalarWhereInput_1 = require("../inputs/TransactionScalarWhereInput");
const TransactionUpdateManyMutationInput_1 = require("../inputs/TransactionUpdateManyMutationInput");
let TransactionUpdateManyWithWhereWithoutUserInput = class TransactionUpdateManyWithWhereWithoutUserInput {
};
exports.TransactionUpdateManyWithWhereWithoutUserInput = TransactionUpdateManyWithWhereWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionScalarWhereInput_1.TransactionScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionScalarWhereInput_1.TransactionScalarWhereInput)
], TransactionUpdateManyWithWhereWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateManyMutationInput_1.TransactionUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionUpdateManyMutationInput_1.TransactionUpdateManyMutationInput)
], TransactionUpdateManyWithWhereWithoutUserInput.prototype, "data", void 0);
exports.TransactionUpdateManyWithWhereWithoutUserInput = TransactionUpdateManyWithWhereWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateManyWithWhereWithoutUserInput", {})
], TransactionUpdateManyWithWhereWithoutUserInput);
