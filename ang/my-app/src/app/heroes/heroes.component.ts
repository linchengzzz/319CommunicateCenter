import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    public heroes: Hero[];
    public date: object = new Date();
    /**
     * Creates an instance of heroes component.
     * @param {'依赖注入'} heroService
     */
    constructor(private heroService: HeroService) {}
    ngOnInit(): void {
        this.getHeroes();
    }
    /**
     * Gets heroes 初始列表化数据
     */
    private getHeroes(): void {
        this.heroService
            .getHeroes()
            .subscribe((heroes: Hero[]) => (this.heroes = heroes));
    }
    public add(name: string): void {
        name = name.trim();
        if (name) {
            this.heroService
                .addHero({ name } as Hero)
                .subscribe((hero: Hero) => this.heroes.push(hero));
        }
    }
    public delete(hero: Hero): void {
        this.heroes = this.heroes.filter((h: Hero) => h !== hero);
        this.heroService.deleteHero(hero).subscribe();
    }
}
