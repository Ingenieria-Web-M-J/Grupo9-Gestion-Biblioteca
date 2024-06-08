import { TransactionCreateManyUserInputEnvelope } from "../inputs/TransactionCreateManyUserInputEnvelope";
import { TransactionCreateOrConnectWithoutUserInput } from "../inputs/TransactionCreateOrConnectWithoutUserInput";
import { TransactionCreateWithoutUserInput } from "../inputs/TransactionCreateWithoutUserInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";
export declare class TransactionCreateNestedManyWithoutUserInput {
    create?: TransactionCreateWithoutUserInput[] | undefined;
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: TransactionCreateManyUserInputEnvelope | undefined;
    connect?: TransactionWhereUniqueInput[] | undefined;
}
