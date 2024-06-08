import { Product } from "../models/Product";
import { User } from "../models/User";
export declare class Transaction {
    id: string;
    amount: number;
    user?: User;
    userId: string;
    product?: Product;
    productId: string;
    type: string;
    createdAt: Date;
}
