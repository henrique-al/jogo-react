export class Hero {
  public name: string;
  private life: number;
  public img: string;
  private distance: number
  constructor(name: string, life: number, img: string) {
    this.name = name;
    this.life = life;
    this.img = `/assets/${img}.png`;
    this.distance = 960;
  }

  public getLife(): number {
    return this.life;
  }

  public setLife(life: number): void{
    this.life = life
  }

  public getDistance(): number{
    return this.distance
  }
}
