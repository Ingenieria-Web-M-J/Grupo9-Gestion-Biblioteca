"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutTransactionNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutTransactionInput_1 = require("../inputs/UserCreateOrConnectWithoutTransactionInput");
const UserCreateWithoutTransactionInput_1 = require("../inputs/UserCreateWithoutTransactionInput");
const UserUpdateToOneWithWhereWithoutTransactionInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutTransactionInput");
const UserUpsertWithoutTransactionInput_1 = require("../inputs/UserUpsertWithoutTransactionInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutTransactionNestedInput = class UserUpdateOneRequiredWithoutTransactionNestedInput {
};
exports.UserUpdateOneRequiredWithoutTransactionNestedInput = UserUpdateOneRequiredWithoutTransactionNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTransactionInput_1.UserCreateWithoutTransactionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutTransactionInput_1.UserCreateWithoutTransactionInput)
], UserUpdateOneRequiredWithoutTransactionNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTransactionInput_1.UserCreateOrConnectWithoutTransactionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutTransactionInput_1.UserCreateOrConnectWithoutTransactionInput)
], UserUpdateOneRequiredWithoutTransactionNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutTransactionInput_1.UserUpsertWithoutTransactionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutTransactionInput_1.UserUpsertWithoutTransactionInput)
], UserUpdateOneRequiredWithoutTransactionNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutTransactionNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutTransactionInput_1.UserUpdateToOneWithWhereWithoutTransactionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutTransactionInput_1.UserUpdateToOneWithWhereWithoutTransactionInput)
], UserUpdateOneRequiredWithoutTransactionNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutTransactionNestedInput = UserUpdateOneRequiredWithoutTransactionNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutTransactionNestedInput", {})
], UserUpdateOneRequiredWithoutTransactionNestedInput);
