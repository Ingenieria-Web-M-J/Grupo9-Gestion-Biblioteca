import { CategoryUpdateOneWithoutProductsNestedInput } from "../inputs/CategoryUpdateOneWithoutProductsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TransactionUpdateManyWithoutProductNestedInput } from "../inputs/TransactionUpdateManyWithoutProductNestedInput";
import { UserUpdateOneRequiredWithoutProductNestedInput } from "../inputs/UserUpdateOneRequiredWithoutProductNestedInput";
export declare class ProductUpdateWithoutRatingInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    price?: NullableFloatFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    balance?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    category?: CategoryUpdateOneWithoutProductsNestedInput | undefined;
    creator?: UserUpdateOneRequiredWithoutProductNestedInput | undefined;
    Transaction?: TransactionUpdateManyWithoutProductNestedInput | undefined;
}
