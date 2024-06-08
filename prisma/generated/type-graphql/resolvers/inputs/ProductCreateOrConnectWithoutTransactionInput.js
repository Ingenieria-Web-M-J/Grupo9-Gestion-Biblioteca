"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutTransactionInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutTransactionInput_1 = require("../inputs/ProductCreateWithoutTransactionInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateOrConnectWithoutTransactionInput = class ProductCreateOrConnectWithoutTransactionInput {
};
exports.ProductCreateOrConnectWithoutTransactionInput = ProductCreateOrConnectWithoutTransactionInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutTransactionInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutTransactionInput_1.ProductCreateWithoutTransactionInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutTransactionInput_1.ProductCreateWithoutTransactionInput)
], ProductCreateOrConnectWithoutTransactionInput.prototype, "create", void 0);
exports.ProductCreateOrConnectWithoutTransactionInput = ProductCreateOrConnectWithoutTransactionInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateOrConnectWithoutTransactionInput", {})
], ProductCreateOrConnectWithoutTransactionInput);
