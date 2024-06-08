"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateManyCreatorInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateManyCreatorInput_1 = require("../inputs/ProductCreateManyCreatorInput");
let ProductCreateManyCreatorInputEnvelope = class ProductCreateManyCreatorInputEnvelope {
};
exports.ProductCreateManyCreatorInputEnvelope = ProductCreateManyCreatorInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductCreateManyCreatorInput_1.ProductCreateManyCreatorInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ProductCreateManyCreatorInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], ProductCreateManyCreatorInputEnvelope.prototype, "skipDuplicates", void 0);
exports.ProductCreateManyCreatorInputEnvelope = ProductCreateManyCreatorInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateManyCreatorInputEnvelope", {})
], ProductCreateManyCreatorInputEnvelope);
