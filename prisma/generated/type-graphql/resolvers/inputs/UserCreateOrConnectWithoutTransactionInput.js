"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutTransactionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutTransactionInput_1 = require("../inputs/UserCreateWithoutTransactionInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutTransactionInput = class UserCreateOrConnectWithoutTransactionInput {
};
exports.UserCreateOrConnectWithoutTransactionInput = UserCreateOrConnectWithoutTransactionInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutTransactionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTransactionInput_1.UserCreateWithoutTransactionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutTransactionInput_1.UserCreateWithoutTransactionInput)
], UserCreateOrConnectWithoutTransactionInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutTransactionInput = UserCreateOrConnectWithoutTransactionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutTransactionInput", {})
], UserCreateOrConnectWithoutTransactionInput);
