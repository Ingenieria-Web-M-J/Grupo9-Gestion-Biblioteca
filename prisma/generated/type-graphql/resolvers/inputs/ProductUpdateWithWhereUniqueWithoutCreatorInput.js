"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateWithWhereUniqueWithoutCreatorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductUpdateWithoutCreatorInput_1 = require("../inputs/ProductUpdateWithoutCreatorInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateWithWhereUniqueWithoutCreatorInput = class ProductUpdateWithWhereUniqueWithoutCreatorInput {
};
exports.ProductUpdateWithWhereUniqueWithoutCreatorInput = ProductUpdateWithWhereUniqueWithoutCreatorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpdateWithWhereUniqueWithoutCreatorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutCreatorInput_1.ProductUpdateWithoutCreatorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutCreatorInput_1.ProductUpdateWithoutCreatorInput)
], ProductUpdateWithWhereUniqueWithoutCreatorInput.prototype, "data", void 0);
exports.ProductUpdateWithWhereUniqueWithoutCreatorInput = ProductUpdateWithWhereUniqueWithoutCreatorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateWithWhereUniqueWithoutCreatorInput", {})
], ProductUpdateWithWhereUniqueWithoutCreatorInput);
