import { ProductCreateOrConnectWithoutTransactionInput } from "../inputs/ProductCreateOrConnectWithoutTransactionInput";
import { ProductCreateWithoutTransactionInput } from "../inputs/ProductCreateWithoutTransactionInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedOneWithoutTransactionInput {
    create?: ProductCreateWithoutTransactionInput | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutTransactionInput | undefined;
    connect?: ProductWhereUniqueInput | undefined;
}
