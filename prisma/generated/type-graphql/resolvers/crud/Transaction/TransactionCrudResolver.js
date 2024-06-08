"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTransactionArgs_1 = require("./args/AggregateTransactionArgs");
const CreateManyTransactionArgs_1 = require("./args/CreateManyTransactionArgs");
const CreateOneTransactionArgs_1 = require("./args/CreateOneTransactionArgs");
const DeleteManyTransactionArgs_1 = require("./args/DeleteManyTransactionArgs");
const DeleteOneTransactionArgs_1 = require("./args/DeleteOneTransactionArgs");
const FindFirstTransactionArgs_1 = require("./args/FindFirstTransactionArgs");
const FindFirstTransactionOrThrowArgs_1 = require("./args/FindFirstTransactionOrThrowArgs");
const FindManyTransactionArgs_1 = require("./args/FindManyTransactionArgs");
const FindUniqueTransactionArgs_1 = require("./args/FindUniqueTransactionArgs");
const FindUniqueTransactionOrThrowArgs_1 = require("./args/FindUniqueTransactionOrThrowArgs");
const GroupByTransactionArgs_1 = require("./args/GroupByTransactionArgs");
const UpdateManyTransactionArgs_1 = require("./args/UpdateManyTransactionArgs");
const UpdateOneTransactionArgs_1 = require("./args/UpdateOneTransactionArgs");
const UpsertOneTransactionArgs_1 = require("./args/UpsertOneTransactionArgs");
const helpers_1 = require("../../../helpers");
const Transaction_1 = require("../../../models/Transaction");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTransaction_1 = require("../../outputs/AggregateTransaction");
const TransactionGroupBy_1 = require("../../outputs/TransactionGroupBy");
let TransactionCrudResolver = class TransactionCrudResolver {
    async aggregateTransaction(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyTransaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneTransaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTransaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneTransaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTransaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTransactionOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async transactions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async transaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getTransaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByTransaction(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyTransaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneTransaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneTransaction(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).transaction.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.TransactionCrudResolver = TransactionCrudResolver;
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTransaction_1.AggregateTransaction, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTransactionArgs_1.AggregateTransactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionCrudResolver.prototype, "aggregateTransaction", null);
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
], TransactionCrudResolver.prototype, "createManyTransaction", null);
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
], TransactionCrudResolver.prototype, "createOneTransaction", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTransactionArgs_1.DeleteManyTransactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionCrudResolver.prototype, "deleteManyTransaction", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Transaction_1.Transaction, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTransactionArgs_1.DeleteOneTransactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionCrudResolver.prototype, "deleteOneTransaction", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Transaction_1.Transaction, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTransactionArgs_1.FindFirstTransactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionCrudResolver.prototype, "findFirstTransaction", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Transaction_1.Transaction, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTransactionOrThrowArgs_1.FindFirstTransactionOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionCrudResolver.prototype, "findFirstTransactionOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Transaction_1.Transaction], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTransactionArgs_1.FindManyTransactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionCrudResolver.prototype, "transactions", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Transaction_1.Transaction, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTransactionArgs_1.FindUniqueTransactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionCrudResolver.prototype, "transaction", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Transaction_1.Transaction, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTransactionOrThrowArgs_1.FindUniqueTransactionOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionCrudResolver.prototype, "getTransaction", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TransactionGroupBy_1.TransactionGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTransactionArgs_1.GroupByTransactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionCrudResolver.prototype, "groupByTransaction", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTransactionArgs_1.UpdateManyTransactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionCrudResolver.prototype, "updateManyTransaction", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Transaction_1.Transaction, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTransactionArgs_1.UpdateOneTransactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionCrudResolver.prototype, "updateOneTransaction", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Transaction_1.Transaction, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTransactionArgs_1.UpsertOneTransactionArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionCrudResolver.prototype, "upsertOneTransaction", null);
exports.TransactionCrudResolver = TransactionCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transaction_1.Transaction)
], TransactionCrudResolver);
