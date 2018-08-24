import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
export class InMemoryDataService extends InMemoryDbService {
    createDb() {
        const heroes: Hero[] = [
            {
                id: 11,
                name: 'Mr.Nice'
            },
            {
                id: 12,
                name: 'Narco'
            },
            {
                id: 13,
                name: 'Three'
            },
            {
                id: 14,
                name: 'Four'
            },
            {
                id: 15,
                name: 'Five'
            },
            {
                id: 16,
                name: 'Six'
            },
            {
                id: 17,
                name: 'Seven'
            },
            {
                id: 18,
                name: 'Eight'
            },
            {
                id: 19,
                name: 'Nine'
            },
            {
                id: 20,
                name: 'Ten'
            }
        ];
        return { heroes };
    }
}
