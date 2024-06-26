"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCategoryOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstCategoryOrThrowArgs_1 = require("./args/FindFirstCategoryOrThrowArgs");
const Category_1 = require("../../../models/Category");
const helpers_1 = require("../../../helpers");
let FindFirstCategoryOrThrowResolver = class FindFirstCategoryOrThrowResolver {
    async findFirstCategoryOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).category.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.FindFirstCategoryOrThrowResolver = FindFirstCategoryOrThrowResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Category_1.Category, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCategoryOrThrowArgs_1.FindFirstCategoryOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCategoryOrThrowResolver.prototype, "findFirstCategoryOrThrow", null);
exports.FindFirstCategoryOrThrowResolver = FindFirstCategoryOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Category_1.Category)
], FindFirstCategoryOrThrowResolver);
