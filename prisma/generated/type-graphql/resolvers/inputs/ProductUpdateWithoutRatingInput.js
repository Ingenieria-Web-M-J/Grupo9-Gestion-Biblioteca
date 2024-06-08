"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithoutRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryUpdateOneWithoutProductsNestedInput_1 = require("../inputs/CategoryUpdateOneWithoutProductsNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableFloatFieldUpdateOperationsInput_1 = require("../inputs/NullableFloatFieldUpdateOperationsInput");
const NullableStringFieldUpdateOperationsInput_1 = require("../inputs/NullableStringFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TransactionUpdateManyWithoutProductNestedInput_1 = require("../inputs/TransactionUpdateManyWithoutProductNestedInput");
const UserUpdateOneRequiredWithoutProductNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutProductNestedInput");
let ProductUpdateWithoutRatingInput = class ProductUpdateWithoutRatingInput {
};
exports.ProductUpdateWithoutRatingInput = ProductUpdateWithoutRatingInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutRatingInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ProductUpdateWithoutRatingInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductUpdateWithoutRatingInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableFloatFieldUpdateOperationsInput_1.NullableFloatFieldUpdateOperationsInput)
], ProductUpdateWithoutRatingInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NullableStringFieldUpdateOperationsInput_1.NullableStringFieldUpdateOperationsInput)
], ProductUpdateWithoutRatingInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ProductUpdateWithoutRatingInput.prototype, "balance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateWithoutRatingInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ProductUpdateWithoutRatingInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateOneWithoutProductsNestedInput_1.CategoryUpdateOneWithoutProductsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpdateOneWithoutProductsNestedInput_1.CategoryUpdateOneWithoutProductsNestedInput)
], ProductUpdateWithoutRatingInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutProductNestedInput_1.UserUpdateOneRequiredWithoutProductNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutProductNestedInput_1.UserUpdateOneRequiredWithoutProductNestedInput)
], ProductUpdateWithoutRatingInput.prototype, "creator", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateManyWithoutProductNestedInput_1.TransactionUpdateManyWithoutProductNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionUpdateManyWithoutProductNestedInput_1.TransactionUpdateManyWithoutProductNestedInput)
], ProductUpdateWithoutRatingInput.prototype, "Transaction", void 0);
exports.ProductUpdateWithoutRatingInput = ProductUpdateWithoutRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateWithoutRatingInput", {})
], ProductUpdateWithoutRatingInput);
