import { Flight } from "src/flights/entities/flight.entity";
import { Passenger } from "src/passengers/entities/passenger.entity";
import { Seat } from "src/seats/entities/seat.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reservation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: string;

    @Column()
    confirmation_code: string;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(()=>Flight, (flight)=>flight.reservations)
    flight: Flight;

    @ManyToOne(()=>Seat, (seat)=>seat.reservations)
    seat: Seat;

    @ManyToOne(()=>Passenger, (passenger)=>passenger.reservations)
    passenger: Passenger;
}