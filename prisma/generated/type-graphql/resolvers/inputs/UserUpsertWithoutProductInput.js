"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutProductInput_1 = require("../inputs/UserCreateWithoutProductInput");
const UserUpdateWithoutProductInput_1 = require("../inputs/UserUpdateWithoutProductInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutProductInput = class UserUpsertWithoutProductInput {
};
exports.UserUpsertWithoutProductInput = UserUpsertWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutProductInput_1.UserUpdateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutProductInput_1.UserUpdateWithoutProductInput)
], UserUpsertWithoutProductInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutProductInput_1.UserCreateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutProductInput_1.UserCreateWithoutProductInput)
], UserUpsertWithoutProductInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutProductInput.prototype, "where", void 0);
exports.UserUpsertWithoutProductInput = UserUpsertWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutProductInput", {})
], UserUpsertWithoutProductInput);
