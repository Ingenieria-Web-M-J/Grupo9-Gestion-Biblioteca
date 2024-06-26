"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RatingAvgOrderByAggregateInput = class RatingAvgOrderByAggregateInput {
};
exports.RatingAvgOrderByAggregateInput = RatingAvgOrderByAggregateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingAvgOrderByAggregateInput.prototype, "rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingAvgOrderByAggregateInput.prototype, "count", void 0);
exports.RatingAvgOrderByAggregateInput = RatingAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingAvgOrderByAggregateInput", {})
], RatingAvgOrderByAggregateInput);
