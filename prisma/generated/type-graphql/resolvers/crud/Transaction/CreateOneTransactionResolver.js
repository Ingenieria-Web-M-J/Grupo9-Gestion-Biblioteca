"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTransactionResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneTransactionArgs_1 = require("./args/CreateOneTransactionArgs");
const Transaction_1 = require("../../../models/Transaction");
const helpers_1 = require("../../../helpers");
let CreateOneTransactionResolver = class CreateOneTransactionResolver {
    async createOneTransaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneTransactionResolver = CreateOneTransactionResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Transaction_1.Transaction, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTransactionArgs_1.CreateOneTransactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneTransactionResolver.prototype, "createOneTransaction", null);
exports.CreateOneTransactionResolver = CreateOneTransactionResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transaction_1.Transaction)
], CreateOneTransactionResolver);
