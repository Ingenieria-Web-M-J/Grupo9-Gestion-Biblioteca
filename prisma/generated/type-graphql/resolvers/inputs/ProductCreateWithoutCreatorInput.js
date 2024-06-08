"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateWithoutCreatorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateNestedOneWithoutProductsInput_1 = require("../inputs/CategoryCreateNestedOneWithoutProductsInput");
const RatingCreateNestedOneWithoutProductInput_1 = require("../inputs/RatingCreateNestedOneWithoutProductInput");
const TransactionCreateNestedManyWithoutProductInput_1 = require("../inputs/TransactionCreateNestedManyWithoutProductInput");
let ProductCreateWithoutCreatorInput = class ProductCreateWithoutCreatorInput {
};
exports.ProductCreateWithoutCreatorInput = ProductCreateWithoutCreatorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutCreatorInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutCreatorInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutCreatorInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateWithoutCreatorInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutCreatorInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateWithoutCreatorInput.prototype, "balance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutCreatorInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutCreatorInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCreateNestedOneWithoutProductInput_1.RatingCreateNestedOneWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingCreateNestedOneWithoutProductInput_1.RatingCreateNestedOneWithoutProductInput)
], ProductCreateWithoutCreatorInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutProductsInput_1.CategoryCreateNestedOneWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryCreateNestedOneWithoutProductsInput_1.CategoryCreateNestedOneWithoutProductsInput)
], ProductCreateWithoutCreatorInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateNestedManyWithoutProductInput_1.TransactionCreateNestedManyWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateNestedManyWithoutProductInput_1.TransactionCreateNestedManyWithoutProductInput)
], ProductCreateWithoutCreatorInput.prototype, "Transaction", void 0);
exports.ProductCreateWithoutCreatorInput = ProductCreateWithoutCreatorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateWithoutCreatorInput", {})
], ProductCreateWithoutCreatorInput);
