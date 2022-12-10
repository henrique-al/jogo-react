import { Enemy } from "../Enemy";

export class Skeleton extends Enemy{
    constructor(level: number){
        super(Math.floor(Math.random() * 2) === 0? '/assets/inimigos/esqueleto/esqueletoVoador.png':'/assets/inimigos/esqueleto/esqueleto.png', level);
    }

    public getFly(): boolean {
      return this.fly
    }
}