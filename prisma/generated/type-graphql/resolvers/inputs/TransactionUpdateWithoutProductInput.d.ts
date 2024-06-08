import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutTransactionNestedInput } from "../inputs/UserUpdateOneRequiredWithoutTransactionNestedInput";
export declare class TransactionUpdateWithoutProductInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    amount?: IntFieldUpdateOperationsInput | undefined;
    type?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutTransactionNestedInput | undefined;
}
