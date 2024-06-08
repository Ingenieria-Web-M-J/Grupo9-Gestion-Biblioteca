"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateNestedManyWithoutCreatorInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateManyCreatorInputEnvelope_1 = require("../inputs/ProductCreateManyCreatorInputEnvelope");
const ProductCreateOrConnectWithoutCreatorInput_1 = require("../inputs/ProductCreateOrConnectWithoutCreatorInput");
const ProductCreateWithoutCreatorInput_1 = require("../inputs/ProductCreateWithoutCreatorInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductCreateNestedManyWithoutCreatorInput = class ProductCreateNestedManyWithoutCreatorInput {
};
exports.ProductCreateNestedManyWithoutCreatorInput = ProductCreateNestedManyWithoutCreatorInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateWithoutCreatorInput_1.ProductCreateWithoutCreatorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutCreatorInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutCreatorInput_1.ProductCreateOrConnectWithoutCreatorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutCreatorInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateManyCreatorInputEnvelope_1.ProductCreateManyCreatorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateManyCreatorInputEnvelope_1.ProductCreateManyCreatorInputEnvelope)
], ProductCreateNestedManyWithoutCreatorInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateNestedManyWithoutCreatorInput.prototype, "connect", void 0);
exports.ProductCreateNestedManyWithoutCreatorInput = ProductCreateNestedManyWithoutCreatorInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateNestedManyWithoutCreatorInput", {})
], ProductCreateNestedManyWithoutCreatorInput);
