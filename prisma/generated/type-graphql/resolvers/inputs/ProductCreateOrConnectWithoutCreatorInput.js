"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutCreatorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateWithoutCreatorInput_1 = require("../inputs/ProductCreateWithoutCreatorInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateOrConnectWithoutCreatorInput = class ProductCreateOrConnectWithoutCreatorInput {
};
exports.ProductCreateOrConnectWithoutCreatorInput = ProductCreateOrConnectWithoutCreatorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereUniqueInput_1.ProductWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductWhereUniqueInput_1.ProductWhereUniqueInput)
], ProductCreateOrConnectWithoutCreatorInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateWithoutCreatorInput_1.ProductCreateWithoutCreatorInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateWithoutCreatorInput_1.ProductCreateWithoutCreatorInput)
], ProductCreateOrConnectWithoutCreatorInput.prototype, "create", void 0);
exports.ProductCreateOrConnectWithoutCreatorInput = ProductCreateOrConnectWithoutCreatorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateOrConnectWithoutCreatorInput", {})
], ProductCreateOrConnectWithoutCreatorInput);
