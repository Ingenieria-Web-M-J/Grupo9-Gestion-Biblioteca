import { CategoryCreateOrConnectWithoutProductsInput } from "../inputs/CategoryCreateOrConnectWithoutProductsInput";
import { CategoryCreateWithoutProductsInput } from "../inputs/CategoryCreateWithoutProductsInput";
import { CategoryUpdateToOneWithWhereWithoutProductsInput } from "../inputs/CategoryUpdateToOneWithWhereWithoutProductsInput";
import { CategoryUpsertWithoutProductsInput } from "../inputs/CategoryUpsertWithoutProductsInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";
export declare class CategoryUpdateOneWithoutProductsNestedInput {
    create?: CategoryCreateWithoutProductsInput | undefined;
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput | undefined;
    upsert?: CategoryUpsertWithoutProductsInput | undefined;
    disconnect?: CategoryWhereInput | undefined;
    delete?: CategoryWhereInput | undefined;
    connect?: CategoryWhereUniqueInput | undefined;
    update?: CategoryUpdateToOneWithWhereWithoutProductsInput | undefined;
}
