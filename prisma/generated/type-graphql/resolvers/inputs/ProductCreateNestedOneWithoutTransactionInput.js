"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedOneWithoutTransactionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateOrConnectWithoutTransactionInput_1 = require("../inputs/ProductCreateOrConnectWithoutTransactionInput");
const ProductCreateWithoutTransactionInput_1 = require("../inputs/ProductCreateWithoutTransactionInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateNestedOneWithoutTransactionInput = class ProductCreateNestedOneWithoutTransactionInput {
};
exports.ProductCreateNestedOneWithoutTransactionInput = ProductCreateNestedOneWithoutTransactionInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutTransactionInput_1.ProductCreateWithoutTransactionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutTransactionInput_1.ProductCreateWithoutTransactionInput)
], ProductCreateNestedOneWithoutTransactionInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutTransactionInput_1.ProductCreateOrConnectWithoutTransactionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateOrConnectWithoutTransactionInput_1.ProductCreateOrConnectWithoutTransactionInput)
], ProductCreateNestedOneWithoutTransactionInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateNestedOneWithoutTransactionInput.prototype, "connect", void 0);
exports.ProductCreateNestedOneWithoutTransactionInput = ProductCreateNestedOneWithoutTransactionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateNestedOneWithoutTransactionInput", {})
], ProductCreateNestedOneWithoutTransactionInput);
