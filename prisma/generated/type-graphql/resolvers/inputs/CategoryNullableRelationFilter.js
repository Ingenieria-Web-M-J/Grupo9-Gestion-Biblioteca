"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryNullableRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryWhereInput_1 = require("../inputs/CategoryWhereInput");
let CategoryNullableRelationFilter = class CategoryNullableRelationFilter {
};
exports.CategoryNullableRelationFilter = CategoryNullableRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryNullableRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryNullableRelationFilter.prototype, "isNot", void 0);
exports.CategoryNullableRelationFilter = CategoryNullableRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryNullableRelationFilter", {})
], CategoryNullableRelationFilter);
