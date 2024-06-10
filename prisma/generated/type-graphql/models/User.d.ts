import { Account } from "../models/Account";
import { Product } from "../models/Product";
import { Session } from "../models/Session";
import { Transaction } from "../models/Transaction";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    name: string;
    email: string;
    emailVerified?: Date | null;
    image?: string | null;
    accounts?: Account[];
    sessions?: Session[];
    createdAt: Date;
    updatedAt: Date;
    Product?: Product[];
    role: string;
    Transaction?: Transaction[];
    _count?: UserCount | null;
  static role: string;
}
