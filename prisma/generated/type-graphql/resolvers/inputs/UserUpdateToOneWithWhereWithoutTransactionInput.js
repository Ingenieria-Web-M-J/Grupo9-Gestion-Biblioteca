"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutTransactionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutTransactionInput_1 = require("../inputs/UserUpdateWithoutTransactionInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutTransactionInput = class UserUpdateToOneWithWhereWithoutTransactionInput {
};
exports.UserUpdateToOneWithWhereWithoutTransactionInput = UserUpdateToOneWithWhereWithoutTransactionInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutTransactionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutTransactionInput_1.UserUpdateWithoutTransactionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutTransactionInput_1.UserUpdateWithoutTransactionInput)
], UserUpdateToOneWithWhereWithoutTransactionInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutTransactionInput = UserUpdateToOneWithWhereWithoutTransactionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutTransactionInput", {})
], UserUpdateToOneWithWhereWithoutTransactionInput);
