"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateWithoutTransactionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateNestedOneWithoutProductsInput_1 = require("../inputs/CategoryCreateNestedOneWithoutProductsInput");
const RatingCreateNestedOneWithoutProductInput_1 = require("../inputs/RatingCreateNestedOneWithoutProductInput");
const UserCreateNestedOneWithoutProductInput_1 = require("../inputs/UserCreateNestedOneWithoutProductInput");
let ProductCreateWithoutTransactionInput = class ProductCreateWithoutTransactionInput {
};
exports.ProductCreateWithoutTransactionInput = ProductCreateWithoutTransactionInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutTransactionInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutTransactionInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutTransactionInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateWithoutTransactionInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutTransactionInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateWithoutTransactionInput.prototype, "balance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutTransactionInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutTransactionInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCreateNestedOneWithoutProductInput_1.RatingCreateNestedOneWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingCreateNestedOneWithoutProductInput_1.RatingCreateNestedOneWithoutProductInput)
], ProductCreateWithoutTransactionInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutProductsInput_1.CategoryCreateNestedOneWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryCreateNestedOneWithoutProductsInput_1.CategoryCreateNestedOneWithoutProductsInput)
], ProductCreateWithoutTransactionInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProductInput_1.UserCreateNestedOneWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutProductInput_1.UserCreateNestedOneWithoutProductInput)
], ProductCreateWithoutTransactionInput.prototype, "creator", void 0);
exports.ProductCreateWithoutTransactionInput = ProductCreateWithoutTransactionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateWithoutTransactionInput", {})
], ProductCreateWithoutTransactionInput);
