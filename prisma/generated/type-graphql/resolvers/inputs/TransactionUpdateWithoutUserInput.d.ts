import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ProductUpdateOneRequiredWithoutTransactionNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutTransactionNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class TransactionUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    amount?: IntFieldUpdateOperationsInput | undefined;
    type?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    product?: ProductUpdateOneRequiredWithoutTransactionNestedInput | undefined;
}
