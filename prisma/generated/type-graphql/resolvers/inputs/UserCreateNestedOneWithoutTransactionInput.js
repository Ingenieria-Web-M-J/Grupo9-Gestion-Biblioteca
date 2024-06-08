"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutTransactionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutTransactionInput_1 = require("../inputs/UserCreateOrConnectWithoutTransactionInput");
const UserCreateWithoutTransactionInput_1 = require("../inputs/UserCreateWithoutTransactionInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutTransactionInput = class UserCreateNestedOneWithoutTransactionInput {
};
exports.UserCreateNestedOneWithoutTransactionInput = UserCreateNestedOneWithoutTransactionInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTransactionInput_1.UserCreateWithoutTransactionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutTransactionInput_1.UserCreateWithoutTransactionInput)
], UserCreateNestedOneWithoutTransactionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTransactionInput_1.UserCreateOrConnectWithoutTransactionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutTransactionInput_1.UserCreateOrConnectWithoutTransactionInput)
], UserCreateNestedOneWithoutTransactionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutTransactionInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutTransactionInput = UserCreateNestedOneWithoutTransactionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutTransactionInput", {})
], UserCreateNestedOneWithoutTransactionInput);
