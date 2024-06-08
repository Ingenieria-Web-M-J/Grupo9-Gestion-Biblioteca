"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutTransactionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutTransactionInput_1 = require("../inputs/UserCreateWithoutTransactionInput");
const UserUpdateWithoutTransactionInput_1 = require("../inputs/UserUpdateWithoutTransactionInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutTransactionInput = class UserUpsertWithoutTransactionInput {
};
exports.UserUpsertWithoutTransactionInput = UserUpsertWithoutTransactionInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutTransactionInput_1.UserUpdateWithoutTransactionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutTransactionInput_1.UserUpdateWithoutTransactionInput)
], UserUpsertWithoutTransactionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTransactionInput_1.UserCreateWithoutTransactionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutTransactionInput_1.UserCreateWithoutTransactionInput)
], UserUpsertWithoutTransactionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutTransactionInput.prototype, "where", void 0);
exports.UserUpsertWithoutTransactionInput = UserUpsertWithoutTransactionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutTransactionInput", {})
], UserUpsertWithoutTransactionInput);
