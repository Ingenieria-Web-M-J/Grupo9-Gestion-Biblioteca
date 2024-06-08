"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingCreateNestedOneWithoutProductInput_1 = require("../inputs/RatingCreateNestedOneWithoutProductInput");
const TransactionCreateNestedManyWithoutProductInput_1 = require("../inputs/TransactionCreateNestedManyWithoutProductInput");
const UserCreateNestedOneWithoutProductInput_1 = require("../inputs/UserCreateNestedOneWithoutProductInput");
let ProductCreateWithoutCategoryInput = class ProductCreateWithoutCategoryInput {
};
exports.ProductCreateWithoutCategoryInput = ProductCreateWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutCategoryInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutCategoryInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutCategoryInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateWithoutCategoryInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateWithoutCategoryInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateWithoutCategoryInput.prototype, "balance", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutCategoryInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ProductCreateWithoutCategoryInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingCreateNestedOneWithoutProductInput_1.RatingCreateNestedOneWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingCreateNestedOneWithoutProductInput_1.RatingCreateNestedOneWithoutProductInput)
], ProductCreateWithoutCategoryInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProductInput_1.UserCreateNestedOneWithoutProductInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutProductInput_1.UserCreateNestedOneWithoutProductInput)
], ProductCreateWithoutCategoryInput.prototype, "creator", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateNestedManyWithoutProductInput_1.TransactionCreateNestedManyWithoutProductInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateNestedManyWithoutProductInput_1.TransactionCreateNestedManyWithoutProductInput)
], ProductCreateWithoutCategoryInput.prototype, "Transaction", void 0);
exports.ProductCreateWithoutCategoryInput = ProductCreateWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateWithoutCategoryInput", {})
], ProductCreateWithoutCategoryInput);
