import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'weedman';
  public age:  number  = 420;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroesDesc():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = 'jointman'
  }
  changeAge():void {
    this.age = 24
  }

  resetValues(){
    this.name = 'weedman';
    this.age = 420;
  }
}
