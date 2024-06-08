"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutTransactionNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutTransactionNestedInput");
let TransactionUpdateWithoutProductInput = class TransactionUpdateWithoutProductInput {
};
exports.TransactionUpdateWithoutProductInput = TransactionUpdateWithoutProductInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TransactionUpdateWithoutProductInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], TransactionUpdateWithoutProductInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TransactionUpdateWithoutProductInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TransactionUpdateWithoutProductInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTransactionNestedInput_1.UserUpdateOneRequiredWithoutTransactionNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutTransactionNestedInput_1.UserUpdateOneRequiredWithoutTransactionNestedInput)
], TransactionUpdateWithoutProductInput.prototype, "user", void 0);
exports.TransactionUpdateWithoutProductInput = TransactionUpdateWithoutProductInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateWithoutProductInput", {})
], TransactionUpdateWithoutProductInput);
