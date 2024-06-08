"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateManyWithoutCreatorNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateManyCreatorInputEnvelope_1 = require("../inputs/ProductCreateManyCreatorInputEnvelope");
const ProductCreateOrConnectWithoutCreatorInput_1 = require("../inputs/ProductCreateOrConnectWithoutCreatorInput");
const ProductCreateWithoutCreatorInput_1 = require("../inputs/ProductCreateWithoutCreatorInput");
const ProductScalarWhereInput_1 = require("../inputs/ProductScalarWhereInput");
const ProductUpdateManyWithWhereWithoutCreatorInput_1 = require("../inputs/ProductUpdateManyWithWhereWithoutCreatorInput");
const ProductUpdateWithWhereUniqueWithoutCreatorInput_1 = require("../inputs/ProductUpdateWithWhereUniqueWithoutCreatorInput");
const ProductUpsertWithWhereUniqueWithoutCreatorInput_1 = require("../inputs/ProductUpsertWithWhereUniqueWithoutCreatorInput");
const ProductWhereUniqueInput_1 = require("../inputs/ProductWhereUniqueInput");
let ProductUpdateManyWithoutCreatorNestedInput = class ProductUpdateManyWithoutCreatorNestedInput {
};
exports.ProductUpdateManyWithoutCreatorNestedInput = ProductUpdateManyWithoutCreatorNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateWithoutCreatorInput_1.ProductCreateWithoutCreatorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCreatorNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutCreatorInput_1.ProductCreateOrConnectWithoutCreatorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCreatorNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutCreatorInput_1.ProductUpsertWithWhereUniqueWithoutCreatorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCreatorNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateManyCreatorInputEnvelope_1.ProductCreateManyCreatorInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductCreateManyCreatorInputEnvelope_1.ProductCreateManyCreatorInputEnvelope)
], ProductUpdateManyWithoutCreatorNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCreatorNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCreatorNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCreatorNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductWhereUniqueInput_1.ProductWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCreatorNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutCreatorInput_1.ProductUpdateWithWhereUniqueWithoutCreatorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCreatorNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutCreatorInput_1.ProductUpdateManyWithWhereWithoutCreatorInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCreatorNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductScalarWhereInput_1.ProductScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductUpdateManyWithoutCreatorNestedInput.prototype, "deleteMany", void 0);
exports.ProductUpdateManyWithoutCreatorNestedInput = ProductUpdateManyWithoutCreatorNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductUpdateManyWithoutCreatorNestedInput", {})
], ProductUpdateManyWithoutCreatorNestedInput);
