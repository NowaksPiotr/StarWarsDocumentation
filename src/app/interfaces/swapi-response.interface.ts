import { Film } from './film.interface';
import { Person } from './person.interface';
import { Vehicles } from './vehicles.interface';
import { Planets } from './planets.interface';
import { Species } from './species.interface';
import { Starships } from './starships.interface';

export interface SwapiResponse {
    count?: number;
    next?: string;
    previous?: string;
    results?: Array<Film | Person | Planets| Vehicles | Species | Starships>;
}
