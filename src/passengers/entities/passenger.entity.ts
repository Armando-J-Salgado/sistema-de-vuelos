import { Reservation } from "src/reservations/entities/reservation.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Passenger {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    document_id: string;

    @OneToMany(()=>Reservation, (reservation)=>reservation.passenger)
    reservations: Reservation[];
}