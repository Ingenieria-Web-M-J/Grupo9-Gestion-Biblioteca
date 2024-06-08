import { CategoryUpdateOneRequiredWithoutProductsNestedInput } from "../inputs/CategoryUpdateOneRequiredWithoutProductsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TransactionUpdateManyWithoutProductNestedInput } from "../inputs/TransactionUpdateManyWithoutProductNestedInput";
import { UserUpdateOneRequiredWithoutProductNestedInput } from "../inputs/UserUpdateOneRequiredWithoutProductNestedInput";
export declare class ProductUpdateWithoutRatingInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    price?: FloatFieldUpdateOperationsInput | undefined;
    image?: StringFieldUpdateOperationsInput | undefined;
    balance?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput | undefined;
    creator?: UserUpdateOneRequiredWithoutProductNestedInput | undefined;
    Transaction?: TransactionUpdateManyWithoutProductNestedInput | undefined;
}
