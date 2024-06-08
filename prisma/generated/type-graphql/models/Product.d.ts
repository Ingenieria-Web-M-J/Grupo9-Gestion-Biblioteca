import { Category } from "../models/Category";
import { Rating } from "../models/Rating";
import { Transaction } from "../models/Transaction";
import { User } from "../models/User";
import { ProductCount } from "../resolvers/outputs/ProductCount";
export declare class Product {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    rating?: Rating | null;
    category?: Category;
    categoryId: string;
    creator?: User;
    userId: string;
    balance: number;
    createdAt: Date;
    updatedAt: Date;
    Transaction?: Transaction[];
    _count?: ProductCount | null;
}
