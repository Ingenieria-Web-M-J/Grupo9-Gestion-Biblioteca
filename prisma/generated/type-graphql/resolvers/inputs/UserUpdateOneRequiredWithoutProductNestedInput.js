"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutProductNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutProductInput_1 = require("../inputs/UserCreateOrConnectWithoutProductInput");
const UserCreateWithoutProductInput_1 = require("../inputs/UserCreateWithoutProductInput");
const UserUpdateToOneWithWhereWithoutProductInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutProductInput");
const UserUpsertWithoutProductInput_1 = require("../inputs/UserUpsertWithoutProductInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutProductNestedInput = class UserUpdateOneRequiredWithoutProductNestedInput {
};
exports.UserUpdateOneRequiredWithoutProductNestedInput = UserUpdateOneRequiredWithoutProductNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutProductInput_1.UserCreateWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutProductInput_1.UserCreateWithoutProductInput)
], UserUpdateOneRequiredWithoutProductNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutProductInput_1.UserCreateOrConnectWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutProductInput_1.UserCreateOrConnectWithoutProductInput)
], UserUpdateOneRequiredWithoutProductNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutProductInput_1.UserUpsertWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutProductInput_1.UserUpsertWithoutProductInput)
], UserUpdateOneRequiredWithoutProductNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutProductNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutProductInput_1.UserUpdateToOneWithWhereWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutProductInput_1.UserUpdateToOneWithWhereWithoutProductInput)
], UserUpdateOneRequiredWithoutProductNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutProductNestedInput = UserUpdateOneRequiredWithoutProductNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutProductNestedInput", {})
], UserUpdateOneRequiredWithoutProductNestedInput);
