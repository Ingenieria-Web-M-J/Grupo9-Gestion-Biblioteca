"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutProductInput_1 = require("../inputs/UserCreateOrConnectWithoutProductInput");
const UserCreateWithoutProductInput_1 = require("../inputs/UserCreateWithoutProductInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutProductInput = class UserCreateNestedOneWithoutProductInput {
};
exports.UserCreateNestedOneWithoutProductInput = UserCreateNestedOneWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutProductInput_1.UserCreateWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutProductInput_1.UserCreateWithoutProductInput)
], UserCreateNestedOneWithoutProductInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutProductInput_1.UserCreateOrConnectWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutProductInput_1.UserCreateOrConnectWithoutProductInput)
], UserCreateNestedOneWithoutProductInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutProductInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutProductInput = UserCreateNestedOneWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutProductInput", {})
], UserCreateNestedOneWithoutProductInput);
