import { ProductCreateManyCreatorInputEnvelope } from "../inputs/ProductCreateManyCreatorInputEnvelope";
import { ProductCreateOrConnectWithoutCreatorInput } from "../inputs/ProductCreateOrConnectWithoutCreatorInput";
import { ProductCreateWithoutCreatorInput } from "../inputs/ProductCreateWithoutCreatorInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutCreatorInput } from "../inputs/ProductUpdateManyWithWhereWithoutCreatorInput";
import { ProductUpdateWithWhereUniqueWithoutCreatorInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutCreatorInput";
import { ProductUpsertWithWhereUniqueWithoutCreatorInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutCreatorInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateManyWithoutCreatorNestedInput {
    create?: ProductCreateWithoutCreatorInput[] | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutCreatorInput[] | undefined;
    upsert?: ProductUpsertWithWhereUniqueWithoutCreatorInput[] | undefined;
    createMany?: ProductCreateManyCreatorInputEnvelope | undefined;
    set?: ProductWhereUniqueInput[] | undefined;
    disconnect?: ProductWhereUniqueInput[] | undefined;
    delete?: ProductWhereUniqueInput[] | undefined;
    connect?: ProductWhereUniqueInput[] | undefined;
    update?: ProductUpdateWithWhereUniqueWithoutCreatorInput[] | undefined;
    updateMany?: ProductUpdateManyWithWhereWithoutCreatorInput[] | undefined;
    deleteMany?: ProductScalarWhereInput[] | undefined;
}
