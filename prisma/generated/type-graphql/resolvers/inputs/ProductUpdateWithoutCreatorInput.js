"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithoutCreatorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryUpdateOneWithoutProductsNestedInput_1 = require("../inputs/CategoryUpdateOneWithoutProductsNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableFloatFieldUpdateOperationsInput_1 = require("../inputs/NullableFloatFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const RatingUpdateOneWithoutProductNestedInput_1 = require("../inputs/RatingUpdateOneWithoutProductNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TransactionUpdateManyWithoutProductNestedInput_1 = require("../inputs/TransactionUpdateManyWithoutProductNestedInput");
let ProductUpdateWithoutCreatorInput = class ProductUpdateWithoutCreatorInput {
};
exports.ProductUpdateWithoutCreatorInput = ProductUpdateWithoutCreatorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutCreatorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutCreatorInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductUpdateWithoutCreatorInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput)
], ProductUpdateWithoutCreatorInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductUpdateWithoutCreatorInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateWithoutCreatorInput.prototype, "balance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateWithoutCreatorInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateWithoutCreatorInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingUpdateOneWithoutProductNestedInput_1.RatingUpdateOneWithoutProductNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingUpdateOneWithoutProductNestedInput_1.RatingUpdateOneWithoutProductNestedInput)
], ProductUpdateWithoutCreatorInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateOneWithoutProductsNestedInput_1.CategoryUpdateOneWithoutProductsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpdateOneWithoutProductsNestedInput_1.CategoryUpdateOneWithoutProductsNestedInput)
], ProductUpdateWithoutCreatorInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateManyWithoutProductNestedInput_1.TransactionUpdateManyWithoutProductNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionUpdateManyWithoutProductNestedInput_1.TransactionUpdateManyWithoutProductNestedInput)
], ProductUpdateWithoutCreatorInput.prototype, "Transaction", void 0);
exports.ProductUpdateWithoutCreatorInput = ProductUpdateWithoutCreatorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateWithoutCreatorInput", {})
], ProductUpdateWithoutCreatorInput);
