"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const RatingUpdateOneWithoutProductNestedInput_1 = require("../inputs/RatingUpdateOneWithoutProductNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TransactionUpdateManyWithoutProductNestedInput_1 = require("../inputs/TransactionUpdateManyWithoutProductNestedInput");
const UserUpdateOneRequiredWithoutProductNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutProductNestedInput");
let ProductUpdateWithoutCategoryInput = class ProductUpdateWithoutCategoryInput {
};
exports.ProductUpdateWithoutCategoryInput = ProductUpdateWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoryInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoryInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoryInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoryInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoryInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoryInput.prototype, "balance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoryInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateWithoutCategoryInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingUpdateOneWithoutProductNestedInput_1.RatingUpdateOneWithoutProductNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingUpdateOneWithoutProductNestedInput_1.RatingUpdateOneWithoutProductNestedInput)
], ProductUpdateWithoutCategoryInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutProductNestedInput_1.UserUpdateOneRequiredWithoutProductNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutProductNestedInput_1.UserUpdateOneRequiredWithoutProductNestedInput)
], ProductUpdateWithoutCategoryInput.prototype, "creator", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateManyWithoutProductNestedInput_1.TransactionUpdateManyWithoutProductNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionUpdateManyWithoutProductNestedInput_1.TransactionUpdateManyWithoutProductNestedInput)
], ProductUpdateWithoutCategoryInput.prototype, "Transaction", void 0);
exports.ProductUpdateWithoutCategoryInput = ProductUpdateWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateWithoutCategoryInput", {})
], ProductUpdateWithoutCategoryInput);
