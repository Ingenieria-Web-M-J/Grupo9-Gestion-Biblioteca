"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneRatingResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneRatingArgs_1 = require("./args/UpsertOneRatingArgs");
const Rating_1 = require("../../../models/Rating");
const helpers_1 = require("../../../helpers");
let UpsertOneRatingResolver = class UpsertOneRatingResolver {
    async upsertOneRating(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).rating.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpsertOneRatingResolver = UpsertOneRatingResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Rating_1.Rating, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneRatingArgs_1.UpsertOneRatingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneRatingResolver.prototype, "upsertOneRating", null);
exports.UpsertOneRatingResolver = UpsertOneRatingResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Rating_1.Rating)
], UpsertOneRatingResolver);
