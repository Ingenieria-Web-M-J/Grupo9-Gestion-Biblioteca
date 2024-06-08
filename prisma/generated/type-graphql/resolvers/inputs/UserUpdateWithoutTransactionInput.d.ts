import { AccountUpdateManyWithoutUserNestedInput } from "../inputs/AccountUpdateManyWithoutUserNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductUpdateManyWithoutCreatorNestedInput } from "../inputs/ProductUpdateManyWithoutCreatorNestedInput";
import { SessionUpdateManyWithoutUserNestedInput } from "../inputs/SessionUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateWithoutTransactionInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    role?: StringFieldUpdateOperationsInput | undefined;
    accounts?: AccountUpdateManyWithoutUserNestedInput | undefined;
    sessions?: SessionUpdateManyWithoutUserNestedInput | undefined;
    Product?: ProductUpdateManyWithoutCreatorNestedInput | undefined;
}
