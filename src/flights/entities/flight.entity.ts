import { Reservation } from 'src/reservations/entities/reservation.entity';
import { Seat } from 'src/seats/entities/seat.entity';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class Flight {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    origin: string;

    @Column()
    destination: string;

    @Column()
    departure_time: Date;

    @Column()
    arrival_time: Date;

    @Column()
    price: Number;

    @Column()
    status: string;

    @OneToMany(()=>Seat, (seat)=>seat.flight)
    seats: Seat[];

    @OneToMany(()=>Reservation, (reservation)=>reservation.flight)
    reservations: Reservation[];

}