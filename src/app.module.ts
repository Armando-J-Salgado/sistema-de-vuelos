import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheService } from './cache.service';
import { FlightsService } from './flights/flights.service';
import { SeatsService } from './seats/seats.service';
import { ReservationsService } from './reservations/reservations.service';
import { PassengersService } from './passengers/passengers.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CacheService, FlightsService, SeatsService, ReservationsService, PassengersService],
})
export class AppModule {}
