"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTransactionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyTransactionArgs_1 = require("./args/CreateManyTransactionArgs");
const Transaction_1 = require("../../../models/Transaction");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyTransactionResolver = class CreateManyTransactionResolver {
    async createManyTransaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyTransactionResolver = CreateManyTransactionResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTransactionArgs_1.CreateManyTransactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyTransactionResolver.prototype, "createManyTransaction", null);
exports.CreateManyTransactionResolver = CreateManyTransactionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transaction_1.Transaction)
], CreateManyTransactionResolver);
