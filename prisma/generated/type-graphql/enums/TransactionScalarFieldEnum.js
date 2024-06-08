"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TransactionScalarFieldEnum;
(function (TransactionScalarFieldEnum) {
    TransactionScalarFieldEnum["id"] = "id";
    TransactionScalarFieldEnum["amount"] = "amount";
    TransactionScalarFieldEnum["userId"] = "userId";
    TransactionScalarFieldEnum["productId"] = "productId";
    TransactionScalarFieldEnum["type"] = "type";
    TransactionScalarFieldEnum["createdAt"] = "createdAt";
})(TransactionScalarFieldEnum || (exports.TransactionScalarFieldEnum = TransactionScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TransactionScalarFieldEnum, {
    name: "TransactionScalarFieldEnum",
    description: undefined,
});
