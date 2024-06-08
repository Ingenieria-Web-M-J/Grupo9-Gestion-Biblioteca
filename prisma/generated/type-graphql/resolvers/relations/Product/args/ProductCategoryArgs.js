"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryWhereInput_1 = require("../../../inputs/CategoryWhereInput");
let ProductCategoryArgs = class ProductCategoryArgs {
};
exports.ProductCategoryArgs = ProductCategoryArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], ProductCategoryArgs.prototype, "where", void 0);
exports.ProductCategoryArgs = ProductCategoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ProductCategoryArgs);
