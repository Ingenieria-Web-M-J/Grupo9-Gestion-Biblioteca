"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountUpdateManyWithoutUserNestedInput_1 = require("../inputs/AccountUpdateManyWithoutUserNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const SessionUpdateManyWithoutUserNestedInput_1 = require("../inputs/SessionUpdateManyWithoutUserNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TransactionUpdateManyWithoutUserNestedInput_1 = require("../inputs/TransactionUpdateManyWithoutUserNestedInput");
let UserUpdateWithoutProductInput = class UserUpdateWithoutProductInput {
};
exports.UserUpdateWithoutProductInput = UserUpdateWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutProductInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutProductInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutProductInput.prototype, "email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutProductInput.prototype, "emailVerified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], UserUpdateWithoutProductInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutProductInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], UserUpdateWithoutProductInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], UserUpdateWithoutProductInput.prototype, "role", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUpdateManyWithoutUserNestedInput_1.AccountUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountUpdateManyWithoutUserNestedInput_1.AccountUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutProductInput.prototype, "accounts", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SessionUpdateManyWithoutUserNestedInput_1.SessionUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SessionUpdateManyWithoutUserNestedInput_1.SessionUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutProductInput.prototype, "sessions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateManyWithoutUserNestedInput_1.TransactionUpdateManyWithoutUserNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionUpdateManyWithoutUserNestedInput_1.TransactionUpdateManyWithoutUserNestedInput)
], UserUpdateWithoutProductInput.prototype, "Transaction", void 0);
exports.UserUpdateWithoutProductInput = UserUpdateWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateWithoutProductInput", {})
], UserUpdateWithoutProductInput);
