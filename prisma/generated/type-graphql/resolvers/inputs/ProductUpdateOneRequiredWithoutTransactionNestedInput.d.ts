import { ProductCreateOrConnectWithoutTransactionInput } from "../inputs/ProductCreateOrConnectWithoutTransactionInput";
import { ProductCreateWithoutTransactionInput } from "../inputs/ProductCreateWithoutTransactionInput";
import { ProductUpdateToOneWithWhereWithoutTransactionInput } from "../inputs/ProductUpdateToOneWithWhereWithoutTransactionInput";
import { ProductUpsertWithoutTransactionInput } from "../inputs/ProductUpsertWithoutTransactionInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateOneRequiredWithoutTransactionNestedInput {
    create?: ProductCreateWithoutTransactionInput | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutTransactionInput | undefined;
    upsert?: ProductUpsertWithoutTransactionInput | undefined;
    connect?: ProductWhereUniqueInput | undefined;
    update?: ProductUpdateToOneWithWhereWithoutTransactionInput | undefined;
}
