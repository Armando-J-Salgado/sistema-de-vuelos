import { Flight } from "src/flights/entities/flight.entity";
import { Reservation } from "src/reservations/entities/reservation.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Seat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    seat_number: string;

    @Column()
    class: string;

    @Column()
    status: string;

    @ManyToOne(()=>Flight, (flight)=>flight.seats)
    flight: Flight;

    @OneToMany(()=>Reservation, (reservation)=>reservation.seat)
    reservations: Reservation[]

}