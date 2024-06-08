"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const ProductUpdateOneRequiredWithoutTransactionNestedInput_1 = require("../inputs/ProductUpdateOneRequiredWithoutTransactionNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let TransactionUpdateWithoutUserInput = class TransactionUpdateWithoutUserInput {
};
exports.TransactionUpdateWithoutUserInput = TransactionUpdateWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TransactionUpdateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], TransactionUpdateWithoutUserInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TransactionUpdateWithoutUserInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], TransactionUpdateWithoutUserInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutTransactionNestedInput_1.ProductUpdateOneRequiredWithoutTransactionNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateOneRequiredWithoutTransactionNestedInput_1.ProductUpdateOneRequiredWithoutTransactionNestedInput)
], TransactionUpdateWithoutUserInput.prototype, "product", void 0);
exports.TransactionUpdateWithoutUserInput = TransactionUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateWithoutUserInput", {})
], TransactionUpdateWithoutUserInput);
