import { Enemy } from "../Enemy";

export class Clock extends Enemy{
    constructor(level: number){
        super(Math.floor(Math.random() * 2) === 0? '/assets/inimigos/relogio/relogioVoador.png':'/assets/inimigos/relogio/relogio.png', level);
    }

    public getFly(): boolean {
      return this.fly;
    }
}