import { Category } from "./Category";
import { User } from "./User";

export class Product {
    public id: number;
    public nome: string;
    public descricao: string;
    public preco: number;
    public foto: string;
    public categoria: Category;
    public usuario: User;
}