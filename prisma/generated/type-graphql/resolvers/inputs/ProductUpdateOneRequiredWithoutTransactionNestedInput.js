"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateOneRequiredWithoutTransactionNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateOrConnectWithoutTransactionInput_1 = require("../inputs/ProductCreateOrConnectWithoutTransactionInput");
const ProductCreateWithoutTransactionInput_1 = require("../inputs/ProductCreateWithoutTransactionInput");
const ProductUpdateToOneWithWhereWithoutTransactionInput_1 = require("../inputs/ProductUpdateToOneWithWhereWithoutTransactionInput");
const ProductUpsertWithoutTransactionInput_1 = require("../inputs/ProductUpsertWithoutTransactionInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateOneRequiredWithoutTransactionNestedInput = class ProductUpdateOneRequiredWithoutTransactionNestedInput {
};
exports.ProductUpdateOneRequiredWithoutTransactionNestedInput = ProductUpdateOneRequiredWithoutTransactionNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutTransactionInput_1.ProductCreateWithoutTransactionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutTransactionInput_1.ProductCreateWithoutTransactionInput)
], ProductUpdateOneRequiredWithoutTransactionNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutTransactionInput_1.ProductCreateOrConnectWithoutTransactionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateOrConnectWithoutTransactionInput_1.ProductCreateOrConnectWithoutTransactionInput)
], ProductUpdateOneRequiredWithoutTransactionNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpsertWithoutTransactionInput_1.ProductUpsertWithoutTransactionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpsertWithoutTransactionInput_1.ProductUpsertWithoutTransactionInput)
], ProductUpdateOneRequiredWithoutTransactionNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateOneRequiredWithoutTransactionNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateToOneWithWhereWithoutTransactionInput_1.ProductUpdateToOneWithWhereWithoutTransactionInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductUpdateToOneWithWhereWithoutTransactionInput_1.ProductUpdateToOneWithWhereWithoutTransactionInput)
], ProductUpdateOneRequiredWithoutTransactionNestedInput.prototype, "update", void 0);
exports.ProductUpdateOneRequiredWithoutTransactionNestedInput = ProductUpdateOneRequiredWithoutTransactionNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutTransactionNestedInput", {})
], ProductUpdateOneRequiredWithoutTransactionNestedInput);
