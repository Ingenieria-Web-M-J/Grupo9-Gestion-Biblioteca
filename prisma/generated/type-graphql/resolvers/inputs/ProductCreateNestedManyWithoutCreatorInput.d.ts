import { ProductCreateManyCreatorInputEnvelope } from "../inputs/ProductCreateManyCreatorInputEnvelope";
import { ProductCreateOrConnectWithoutCreatorInput } from "../inputs/ProductCreateOrConnectWithoutCreatorInput";
import { ProductCreateWithoutCreatorInput } from "../inputs/ProductCreateWithoutCreatorInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedManyWithoutCreatorInput {
    create?: ProductCreateWithoutCreatorInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutCreatorInput[] | undefined;
    createMany?: ProductCreateManyCreatorInputEnvelope | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
}
