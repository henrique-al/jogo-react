import { Enemy } from "../Enemy";

export class Skeleton extends Enemy{
    constructor(){
        super(Math.floor(Math.random() * 2) === 0? '/assets/inimigos/esqueleto/esqueletoVoador.png':'/assets/inimigos/esqueleto/esqueleto.png');
    }

    public getFly(): boolean {
      return this.fly
    }
}