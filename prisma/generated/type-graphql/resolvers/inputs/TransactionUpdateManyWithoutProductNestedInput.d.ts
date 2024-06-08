import { TransactionCreateManyProductInputEnvelope } from "../inputs/TransactionCreateManyProductInputEnvelope";
import { TransactionCreateOrConnectWithoutProductInput } from "../inputs/TransactionCreateOrConnectWithoutProductInput";
import { TransactionCreateWithoutProductInput } from "../inputs/TransactionCreateWithoutProductInput";
import { TransactionScalarWhereInput } from "../inputs/TransactionScalarWhereInput";
import { TransactionUpdateManyWithWhereWithoutProductInput } from "../inputs/TransactionUpdateManyWithWhereWithoutProductInput";
import { TransactionUpdateWithWhereUniqueWithoutProductInput } from "../inputs/TransactionUpdateWithWhereUniqueWithoutProductInput";
import { TransactionUpsertWithWhereUniqueWithoutProductInput } from "../inputs/TransactionUpsertWithWhereUniqueWithoutProductInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";
export declare class TransactionUpdateManyWithoutProductNestedInput {
    create?: TransactionCreateWithoutProductInput[] | undefined;
    connectOrCreate?: TransactionCreateOrConnectWithoutProductInput[] | undefined;
    upsert?: TransactionUpsertWithWhereUniqueWithoutProductInput[] | undefined;
    createMany?: TransactionCreateManyProductInputEnvelope | undefined;
    set?: TransactionWhereUniqueInput[] | undefined;
    disconnect?: TransactionWhereUniqueInput[] | undefined;
    delete?: TransactionWhereUniqueInput[] | undefined;
    connect?: TransactionWhereUniqueInput[] | undefined;
    update?: TransactionUpdateWithWhereUniqueWithoutProductInput[] | undefined;
    updateMany?: TransactionUpdateManyWithWhereWithoutProductInput[] | undefined;
    deleteMany?: TransactionScalarWhereInput[] | undefined;
}
