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
    // 依赖注入
    constructor(private heroService: HeroService) {}
    ngOnInit(): void {
        this.getHeroes();
    }
    // 初始列表化数据
    getHeroes(): void {
        this.heroService
            .getHeroes()
            .subscribe((heroes: Hero[]) => (this.heroes = heroes));
    }
}
