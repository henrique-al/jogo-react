import { Enemy } from "../Enemy";

export class Clock extends Enemy{
    constructor(){
        super(Math.floor(Math.random() * 2) === 0? '/assets/inimigos/relogio/relogioVoador.png':'/assets/inimigos/relogio/relogio.png');
    }

    public getFly(): boolean {
      return this.fly;
    }
}