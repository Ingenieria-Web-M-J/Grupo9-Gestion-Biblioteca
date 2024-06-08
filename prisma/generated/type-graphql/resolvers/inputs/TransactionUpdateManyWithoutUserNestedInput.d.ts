import { TransactionCreateManyUserInputEnvelope } from "../inputs/TransactionCreateManyUserInputEnvelope";
import { TransactionCreateOrConnectWithoutUserInput } from "../inputs/TransactionCreateOrConnectWithoutUserInput";
import { TransactionCreateWithoutUserInput } from "../inputs/TransactionCreateWithoutUserInput";
import { TransactionScalarWhereInput } from "../inputs/TransactionScalarWhereInput";
import { TransactionUpdateManyWithWhereWithoutUserInput } from "../inputs/TransactionUpdateManyWithWhereWithoutUserInput";
import { TransactionUpdateWithWhereUniqueWithoutUserInput } from "../inputs/TransactionUpdateWithWhereUniqueWithoutUserInput";
import { TransactionUpsertWithWhereUniqueWithoutUserInput } from "../inputs/TransactionUpsertWithWhereUniqueWithoutUserInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";
export declare class TransactionUpdateManyWithoutUserNestedInput {
    create?: TransactionCreateWithoutUserInput[] | undefined;
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: TransactionCreateManyUserInputEnvelope | undefined;
    set?: TransactionWhereUniqueInput[] | undefined;
    disconnect?: TransactionWhereUniqueInput[] | undefined;
    delete?: TransactionWhereUniqueInput[] | undefined;
    connect?: TransactionWhereUniqueInput[] | undefined;
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: TransactionScalarWhereInput[] | undefined;
}
