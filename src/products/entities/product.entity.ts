import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn('uuid',{ name: 'user_id' })
    productId: string
    @Column({ unique: true ,})
    productName: string;
    @Column({default: 0})
    price: number;
    @Column({default: 0})
    stock: number;
}
