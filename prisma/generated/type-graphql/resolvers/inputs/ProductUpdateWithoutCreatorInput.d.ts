import { CategoryUpdateOneRequiredWithoutProductsNestedInput } from "../inputs/CategoryUpdateOneRequiredWithoutProductsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { RatingUpdateOneWithoutProductNestedInput } from "../inputs/RatingUpdateOneWithoutProductNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TransactionUpdateManyWithoutProductNestedInput } from "../inputs/TransactionUpdateManyWithoutProductNestedInput";
export declare class ProductUpdateWithoutCreatorInput {
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
    Transaction?: TransactionUpdateManyWithoutProductNestedInput | undefined;
}
