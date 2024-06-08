"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutProductInput_1 = require("../inputs/UserCreateWithoutProductInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutProductInput = class UserCreateOrConnectWithoutProductInput {
};
exports.UserCreateOrConnectWithoutProductInput = UserCreateOrConnectWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutProductInput_1.UserCreateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutProductInput_1.UserCreateWithoutProductInput)
], UserCreateOrConnectWithoutProductInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutProductInput = UserCreateOrConnectWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutProductInput", {})
], UserCreateOrConnectWithoutProductInput);
