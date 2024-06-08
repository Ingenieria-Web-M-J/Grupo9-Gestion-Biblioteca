import { CategoryUpdateOneWithoutProductsNestedInput } from "../inputs/CategoryUpdateOneWithoutProductsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RatingUpdateOneWithoutProductNestedInput } from "../inputs/RatingUpdateOneWithoutProductNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TransactionUpdateManyWithoutProductNestedInput } from "../inputs/TransactionUpdateManyWithoutProductNestedInput";
export declare class ProductUpdateWithoutCreatorInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    price?: NullableFloatFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    balance?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    rating?: RatingUpdateOneWithoutProductNestedInput | undefined;
    category?: CategoryUpdateOneWithoutProductsNestedInput | undefined;
    Transaction?: TransactionUpdateManyWithoutProductNestedInput | undefined;
}
