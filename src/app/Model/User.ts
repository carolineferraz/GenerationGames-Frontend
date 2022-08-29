import { Product } from "./Product";

export class User {
    public id: number
    public nome: string
    public usuario: string
    public senha: string
    public tipo: string
    public produto: Product[]
}