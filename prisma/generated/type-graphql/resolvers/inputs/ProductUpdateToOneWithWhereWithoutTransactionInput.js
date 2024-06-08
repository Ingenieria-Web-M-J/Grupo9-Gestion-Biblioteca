"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateToOneWithWhereWithoutTransactionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductUpdateWithoutTransactionInput_1 = require("../inputs/ProductUpdateWithoutTransactionInput");
const ProductWhereInput_1 = require("../inputs/ProductWhereInput");
let ProductUpdateToOneWithWhereWithoutTransactionInput = class ProductUpdateToOneWithWhereWithoutTransactionInput {
};
exports.ProductUpdateToOneWithWhereWithoutTransactionInput = ProductUpdateToOneWithWhereWithoutTransactionInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereInput_1.ProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereInput_1.ProductWhereInput)
], ProductUpdateToOneWithWhereWithoutTransactionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutTransactionInput_1.ProductUpdateWithoutTransactionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutTransactionInput_1.ProductUpdateWithoutTransactionInput)
], ProductUpdateToOneWithWhereWithoutTransactionInput.prototype, "data", void 0);
exports.ProductUpdateToOneWithWhereWithoutTransactionInput = ProductUpdateToOneWithWhereWithoutTransactionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutTransactionInput", {})
], ProductUpdateToOneWithWhereWithoutTransactionInput);
