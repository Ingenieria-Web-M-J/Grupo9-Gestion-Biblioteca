"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateWithoutRatingInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateNestedOneWithoutProductsInput_1 = require("../inputs/CategoryCreateNestedOneWithoutProductsInput");
const TransactionCreateNestedManyWithoutProductInput_1 = require("../inputs/TransactionCreateNestedManyWithoutProductInput");
const UserCreateNestedOneWithoutProductInput_1 = require("../inputs/UserCreateNestedOneWithoutProductInput");
let ProductCreateWithoutRatingInput = class ProductCreateWithoutRatingInput {
};
exports.ProductCreateWithoutRatingInput = ProductCreateWithoutRatingInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutRatingInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutRatingInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutRatingInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateWithoutRatingInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutRatingInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateWithoutRatingInput.prototype, "balance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutRatingInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutRatingInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutProductsInput_1.CategoryCreateNestedOneWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateNestedOneWithoutProductsInput_1.CategoryCreateNestedOneWithoutProductsInput)
], ProductCreateWithoutRatingInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProductInput_1.UserCreateNestedOneWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutProductInput_1.UserCreateNestedOneWithoutProductInput)
], ProductCreateWithoutRatingInput.prototype, "creator", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateNestedManyWithoutProductInput_1.TransactionCreateNestedManyWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateNestedManyWithoutProductInput_1.TransactionCreateNestedManyWithoutProductInput)
], ProductCreateWithoutRatingInput.prototype, "Transaction", void 0);
exports.ProductCreateWithoutRatingInput = ProductCreateWithoutRatingInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateWithoutRatingInput", {})
], ProductCreateWithoutRatingInput);
