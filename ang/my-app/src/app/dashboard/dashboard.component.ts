import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { log } from 'util';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public heroes: Hero[] = [];
    constructor(private heroService: HeroService) {}
    ngOnInit(): void {
        this.getHeroes();
    }
    getHeroes(): void {
        this.heroService
            .getHeroes()
            .subscribe((heroes: Hero[]) => {
                this.heroes = heroes.slice(1, 5);
                console.log(this.heroes);
            });
    }
}
