"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCategoryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryOrderByWithAggregationInput_1 = require("../../../inputs/CategoryOrderByWithAggregationInput");
const CategoryScalarWhereWithAggregatesInput_1 = require("../../../inputs/CategoryScalarWhereWithAggregatesInput");
const CategoryWhereInput_1 = require("../../../inputs/CategoryWhereInput");
const CategoryScalarFieldEnum_1 = require("../../../../enums/CategoryScalarFieldEnum");
let GroupByCategoryArgs = class GroupByCategoryArgs {
};
exports.GroupByCategoryArgs = GroupByCategoryArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], GroupByCategoryArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryOrderByWithAggregationInput_1.CategoryOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCategoryArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CategoryScalarFieldEnum_1.CategoryScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCategoryArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryScalarWhereWithAggregatesInput_1.CategoryScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryScalarWhereWithAggregatesInput_1.CategoryScalarWhereWithAggregatesInput)
], GroupByCategoryArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCategoryArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCategoryArgs.prototype, "skip", void 0);
exports.GroupByCategoryArgs = GroupByCategoryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCategoryArgs);
