"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const ProductUpdateOneRequiredWithoutTransactionNestedInput_1 = require("../inputs/ProductUpdateOneRequiredWithoutTransactionNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutTransactionNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutTransactionNestedInput");
let TransactionUpdateInput = class TransactionUpdateInput {
};
exports.TransactionUpdateInput = TransactionUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TransactionUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], TransactionUpdateInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TransactionUpdateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TransactionUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutTransactionNestedInput_1.UserUpdateOneRequiredWithoutTransactionNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutTransactionNestedInput_1.UserUpdateOneRequiredWithoutTransactionNestedInput)
], TransactionUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutTransactionNestedInput_1.ProductUpdateOneRequiredWithoutTransactionNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateOneRequiredWithoutTransactionNestedInput_1.ProductUpdateOneRequiredWithoutTransactionNestedInput)
], TransactionUpdateInput.prototype, "product", void 0);
exports.TransactionUpdateInput = TransactionUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateInput", {})
], TransactionUpdateInput);
