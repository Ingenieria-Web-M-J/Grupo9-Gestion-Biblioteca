import { ProductCreateWithoutTransactionInput } from "../inputs/ProductCreateWithoutTransactionInput";
import { ProductUpdateWithoutTransactionInput } from "../inputs/ProductUpdateWithoutTransactionInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";
export declare class ProductUpsertWithoutTransactionInput {
    update: ProductUpdateWithoutTransactionInput;
    create: ProductCreateWithoutTransactionInput;
    where?: ProductWhereInput | undefined;
}
