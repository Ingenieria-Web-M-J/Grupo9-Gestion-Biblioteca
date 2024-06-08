"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryUpdateOneWithoutProductsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateOrConnectWithoutProductsInput_1 = require("../inputs/CategoryCreateOrConnectWithoutProductsInput");
const CategoryCreateWithoutProductsInput_1 = require("../inputs/CategoryCreateWithoutProductsInput");
const CategoryUpdateToOneWithWhereWithoutProductsInput_1 = require("../inputs/CategoryUpdateToOneWithWhereWithoutProductsInput");
const CategoryUpsertWithoutProductsInput_1 = require("../inputs/CategoryUpsertWithoutProductsInput");
const CategoryWhereInput_1 = require("../inputs/CategoryWhereInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryUpdateOneWithoutProductsNestedInput = class CategoryUpdateOneWithoutProductsNestedInput {
};
exports.CategoryUpdateOneWithoutProductsNestedInput = CategoryUpdateOneWithoutProductsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutProductsInput_1.CategoryCreateWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutProductsInput_1.CategoryCreateWithoutProductsInput)
], CategoryUpdateOneWithoutProductsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutProductsInput_1.CategoryCreateOrConnectWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryCreateOrConnectWithoutProductsInput_1.CategoryCreateOrConnectWithoutProductsInput)
], CategoryUpdateOneWithoutProductsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpsertWithoutProductsInput_1.CategoryUpsertWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpsertWithoutProductsInput_1.CategoryUpsertWithoutProductsInput)
], CategoryUpdateOneWithoutProductsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryUpdateOneWithoutProductsNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereInput_1.CategoryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereInput_1.CategoryWhereInput)
], CategoryUpdateOneWithoutProductsNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], CategoryUpdateOneWithoutProductsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryUpdateToOneWithWhereWithoutProductsInput_1.CategoryUpdateToOneWithWhereWithoutProductsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CategoryUpdateToOneWithWhereWithoutProductsInput_1.CategoryUpdateToOneWithWhereWithoutProductsInput)
], CategoryUpdateOneWithoutProductsNestedInput.prototype, "update", void 0);
exports.CategoryUpdateOneWithoutProductsNestedInput = CategoryUpdateOneWithoutProductsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryUpdateOneWithoutProductsNestedInput", {})
], CategoryUpdateOneWithoutProductsNestedInput);
