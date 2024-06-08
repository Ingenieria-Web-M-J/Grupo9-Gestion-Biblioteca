import { AccountUpdateManyWithoutUserNestedInput } from "../inputs/AccountUpdateManyWithoutUserNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductUpdateManyWithoutCreatorNestedInput } from "../inputs/ProductUpdateManyWithoutCreatorNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TransactionUpdateManyWithoutUserNestedInput } from "../inputs/TransactionUpdateManyWithoutUserNestedInput";
export declare class UserUpdateWithoutSessionsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    role?: StringFieldUpdateOperationsInput | undefined;
    accounts?: AccountUpdateManyWithoutUserNestedInput | undefined;
    Product?: ProductUpdateManyWithoutCreatorNestedInput | undefined;
    Transaction?: TransactionUpdateManyWithoutUserNestedInput | undefined;
}
