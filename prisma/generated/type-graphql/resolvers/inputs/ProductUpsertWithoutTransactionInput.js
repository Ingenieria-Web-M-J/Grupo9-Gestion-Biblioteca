"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithoutTransactionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutTransactionInput_1 = require("../inputs/ProductCreateWithoutTransactionInput");
const ProductUpdateWithoutTransactionInput_1 = require("../inputs/ProductUpdateWithoutTransactionInput");
const ProductWhereInput_1 = require("../inputs/ProductWhereInput");
let ProductUpsertWithoutTransactionInput = class ProductUpsertWithoutTransactionInput {
};
exports.ProductUpsertWithoutTransactionInput = ProductUpsertWithoutTransactionInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutTransactionInput_1.ProductUpdateWithoutTransactionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutTransactionInput_1.ProductUpdateWithoutTransactionInput)
], ProductUpsertWithoutTransactionInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutTransactionInput_1.ProductCreateWithoutTransactionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutTransactionInput_1.ProductCreateWithoutTransactionInput)
], ProductUpsertWithoutTransactionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereInput_1.ProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereInput_1.ProductWhereInput)
], ProductUpsertWithoutTransactionInput.prototype, "where", void 0);
exports.ProductUpsertWithoutTransactionInput = ProductUpsertWithoutTransactionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpsertWithoutTransactionInput", {})
], ProductUpsertWithoutTransactionInput);
