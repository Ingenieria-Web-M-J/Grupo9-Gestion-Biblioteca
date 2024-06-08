import { Category } from "../models/Category";
import { Rating } from "../models/Rating";
import { Transaction } from "../models/Transaction";
import { User } from "../models/User";
import { ProductCount } from "../resolvers/outputs/ProductCount";
export declare class Product {
    id: string;
    title: string;
    description?: string | null;
    price?: number | null;
    image?: string | null;
    rating?: Rating | null;
    category?: Category | null;
    categoryId?: string | null;
    creator?: User;
    userId: string;
    balance: number;
    createdAt: Date;
    updatedAt: Date;
    Transaction?: Transaction[];
    _count?: ProductCount | null;
}
