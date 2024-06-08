"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountProductArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductWhereInput_1 = require("../../inputs/ProductWhereInput");
let UserCountProductArgs = class UserCountProductArgs {
};
exports.UserCountProductArgs = UserCountProductArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereInput_1.ProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereInput_1.ProductWhereInput)
], UserCountProductArgs.prototype, "where", void 0);
exports.UserCountProductArgs = UserCountProductArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserCountProductArgs);
