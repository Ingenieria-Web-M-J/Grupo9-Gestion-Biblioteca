"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithWhereUniqueWithoutCreatorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutCreatorInput_1 = require("../inputs/ProductCreateWithoutCreatorInput");
const ProductUpdateWithoutCreatorInput_1 = require("../inputs/ProductUpdateWithoutCreatorInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpsertWithWhereUniqueWithoutCreatorInput = class ProductUpsertWithWhereUniqueWithoutCreatorInput {
};
exports.ProductUpsertWithWhereUniqueWithoutCreatorInput = ProductUpsertWithWhereUniqueWithoutCreatorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductUpsertWithWhereUniqueWithoutCreatorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductUpdateWithoutCreatorInput_1.ProductUpdateWithoutCreatorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductUpdateWithoutCreatorInput_1.ProductUpdateWithoutCreatorInput)
], ProductUpsertWithWhereUniqueWithoutCreatorInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutCreatorInput_1.ProductCreateWithoutCreatorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutCreatorInput_1.ProductCreateWithoutCreatorInput)
], ProductUpsertWithWhereUniqueWithoutCreatorInput.prototype, "create", void 0);
exports.ProductUpsertWithWhereUniqueWithoutCreatorInput = ProductUpsertWithWhereUniqueWithoutCreatorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutCreatorInput", {})
], ProductUpsertWithWhereUniqueWithoutCreatorInput);
