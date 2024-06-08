import { TransactionCreateManyProductInputEnvelope } from "../inputs/TransactionCreateManyProductInputEnvelope";
import { TransactionCreateOrConnectWithoutProductInput } from "../inputs/TransactionCreateOrConnectWithoutProductInput";
import { TransactionCreateWithoutProductInput } from "../inputs/TransactionCreateWithoutProductInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";
export declare class TransactionCreateNestedManyWithoutProductInput {
    create?: TransactionCreateWithoutProductInput[] | undefined;
    connectOrCreate?: TransactionCreateOrConnectWithoutProductInput[] | undefined;
    createMany?: TransactionCreateManyProductInputEnvelope | undefined;
    connect?: TransactionWhereUniqueInput[] | undefined;
}
