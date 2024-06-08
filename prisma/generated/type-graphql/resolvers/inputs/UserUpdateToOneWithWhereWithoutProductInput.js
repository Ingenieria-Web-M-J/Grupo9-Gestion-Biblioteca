"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutProductInput_1 = require("../inputs/UserUpdateWithoutProductInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutProductInput = class UserUpdateToOneWithWhereWithoutProductInput {
};
exports.UserUpdateToOneWithWhereWithoutProductInput = UserUpdateToOneWithWhereWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutProductInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutProductInput_1.UserUpdateWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutProductInput_1.UserUpdateWithoutProductInput)
], UserUpdateToOneWithWhereWithoutProductInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutProductInput = UserUpdateToOneWithWhereWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutProductInput", {})
], UserUpdateToOneWithWhereWithoutProductInput);
