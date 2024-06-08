import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ProductUpdateOneRequiredWithoutTransactionNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutTransactionNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutTransactionNestedInput } from "../inputs/UserUpdateOneRequiredWithoutTransactionNestedInput";
export declare class TransactionUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    amount?: IntFieldUpdateOperationsInput | undefined;
    type?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutTransactionNestedInput | undefined;
    product?: ProductUpdateOneRequiredWithoutTransactionNestedInput | undefined;
}
