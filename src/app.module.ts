import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheService } from './cache.service';
import { FlightsService } from './flights/flights.service';
import { SeatsService } from './seats/seats.service';
import { ReservationsService } from './reservations/reservations.service';
import { PassengersService } from './passengers/passengers.service';
import 'dotenv/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flight } from './flights/entities/flight.entity';
import { Reservation } from './reservations/entities/reservation.entity';
import { Passenger } from './passengers/entities/passenger.entity';
import { Seat } from './seats/entities/seat.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST ?? 'localhost',
    port: Number(process.env.DB_PORT) ?? 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Flight, Reservation, Passenger, Seat],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService, CacheService, FlightsService, SeatsService, ReservationsService, PassengersService],
})
export class AppModule {}
