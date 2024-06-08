"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateWithoutAccountsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateNestedManyWithoutCreatorInput_1 = require("../inputs/ProductCreateNestedManyWithoutCreatorInput");
const SessionCreateNestedManyWithoutUserInput_1 = require("../inputs/SessionCreateNestedManyWithoutUserInput");
const TransactionCreateNestedManyWithoutUserInput_1 = require("../inputs/TransactionCreateNestedManyWithoutUserInput");
let UserCreateWithoutAccountsInput = class UserCreateWithoutAccountsInput {
};
exports.UserCreateWithoutAccountsInput = UserCreateWithoutAccountsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutAccountsInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutAccountsInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserCreateWithoutAccountsInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserCreateWithoutAccountsInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionCreateNestedManyWithoutUserInput_1.SessionCreateNestedManyWithoutUserInput)
], UserCreateWithoutAccountsInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutCreatorInput_1.ProductCreateNestedManyWithoutCreatorInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateNestedManyWithoutCreatorInput_1.ProductCreateNestedManyWithoutCreatorInput)
], UserCreateWithoutAccountsInput.prototype, "Product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateNestedManyWithoutUserInput_1.TransactionCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateNestedManyWithoutUserInput_1.TransactionCreateNestedManyWithoutUserInput)
], UserCreateWithoutAccountsInput.prototype, "Transaction", void 0);
exports.UserCreateWithoutAccountsInput = UserCreateWithoutAccountsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateWithoutAccountsInput", {})
], UserCreateWithoutAccountsInput);
