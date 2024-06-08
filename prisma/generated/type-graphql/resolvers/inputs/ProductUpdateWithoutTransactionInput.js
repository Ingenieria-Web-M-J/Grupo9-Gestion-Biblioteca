"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithoutTransactionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryUpdateOneRequiredWithoutProductsNestedInput_1 = require("../inputs/CategoryUpdateOneRequiredWithoutProductsNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const RatingUpdateOneWithoutProductNestedInput_1 = require("../inputs/RatingUpdateOneWithoutProductNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutProductNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutProductNestedInput");
let ProductUpdateWithoutTransactionInput = class ProductUpdateWithoutTransactionInput {
};
exports.ProductUpdateWithoutTransactionInput = ProductUpdateWithoutTransactionInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutTransactionInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutTransactionInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutTransactionInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], ProductUpdateWithoutTransactionInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutTransactionInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateWithoutTransactionInput.prototype, "balance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateWithoutTransactionInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateWithoutTransactionInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingUpdateOneWithoutProductNestedInput_1.RatingUpdateOneWithoutProductNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingUpdateOneWithoutProductNestedInput_1.RatingUpdateOneWithoutProductNestedInput)
], ProductUpdateWithoutTransactionInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateOneRequiredWithoutProductsNestedInput_1.CategoryUpdateOneRequiredWithoutProductsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpdateOneRequiredWithoutProductsNestedInput_1.CategoryUpdateOneRequiredWithoutProductsNestedInput)
], ProductUpdateWithoutTransactionInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutProductNestedInput_1.UserUpdateOneRequiredWithoutProductNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutProductNestedInput_1.UserUpdateOneRequiredWithoutProductNestedInput)
], ProductUpdateWithoutTransactionInput.prototype, "creator", void 0);
exports.ProductUpdateWithoutTransactionInput = ProductUpdateWithoutTransactionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateWithoutTransactionInput", {})
], ProductUpdateWithoutTransactionInput);
