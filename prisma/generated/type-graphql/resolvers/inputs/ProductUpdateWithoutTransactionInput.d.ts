import { CategoryUpdateOneRequiredWithoutProductsNestedInput } from "../inputs/CategoryUpdateOneRequiredWithoutProductsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { RatingUpdateOneWithoutProductNestedInput } from "../inputs/RatingUpdateOneWithoutProductNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutProductNestedInput } from "../inputs/UserUpdateOneRequiredWithoutProductNestedInput";
export declare class ProductUpdateWithoutTransactionInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    price?: FloatFieldUpdateOperationsInput | undefined;
    image?: StringFieldUpdateOperationsInput | undefined;
    balance?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    rating?: RatingUpdateOneWithoutProductNestedInput | undefined;
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput | undefined;
    creator?: UserUpdateOneRequiredWithoutProductNestedInput | undefined;
}
