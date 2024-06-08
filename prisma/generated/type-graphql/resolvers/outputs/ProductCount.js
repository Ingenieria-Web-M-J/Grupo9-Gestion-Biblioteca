"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCountTransactionArgs_1 = require("./args/ProductCountTransactionArgs");
let ProductCount = class ProductCount {
    getTransaction(root, args) {
        return root.Transaction;
    }
};
exports.ProductCount = ProductCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "Transaction",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ProductCount, ProductCountTransactionArgs_1.ProductCountTransactionArgs]),
    tslib_1.__metadata("design:returntype", Number)
], ProductCount.prototype, "getTransaction", null);
exports.ProductCount = ProductCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProductCount", {})
], ProductCount);
