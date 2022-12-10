import { Clock } from "./extends/Clock";
import { Skeleton } from "./extends/Skeleton";

export abstract class Enemy {
  private static enemies: Enemy[] = [];
  private dano: number;
  private letters: string[];
  public img: string;
  private distance: number;
  protected fly: boolean;
  private static qtdLetters: number = 0;

  constructor(img: string, level: number) {
    this.dano = 1;
    this.letters = this.generateLetters();
    this.img = img;
    this.distance = 0;
    this.fly = img.includes('Voador')? true:false;
    Enemy.qtdLetters = level
  }

  private generateLetters(): string[] {
    const allLetters: string[] = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    const letters: string[] = []

    for (let i: number = 0; i < Enemy.qtdLetters+1; i++) {
      do{
        const random = Math.floor(Math.random() * 26)
        var randomLetter = allLetters[random]
      }while (randomLetter === undefined || randomLetter === '');

      letters.push(randomLetter)
    }

    return letters;
  }

  public getDano(): number {
    return this.dano;
  }

  public getLetters(): string[] {
    return this.letters;
  }

  public setLetters(letters: string[]): void {
    this.letters = letters
  }

  public getDistance(): number {
    return this.distance
  }

  public setDistance(v: number): void {
    this.distance += v;
  }

  public static getEnemies(): Enemy[] {
    return Enemy.enemies;
  }

  public static addEnemies(enemy: Clock | Skeleton): void {
    Enemy.enemies.unshift(enemy)
  }

  public static delEnemy(enemy: Enemy): void {
    Enemy.enemies.forEach((enemyArr, i) => {
      if (enemyArr === enemy) {
        Enemy.enemies.splice(i, 1)
      }
    })
  }

  public removeLetter(key: String): boolean {
    let enemyLetters: string[] = this.getLetters()
    for (let i = 0; i < enemyLetters.length; i++) {
      if (!enemyLetters[i] || enemyLetters[i] === key) {
        enemyLetters.splice(i, 1)
      }

      this.setLetters(enemyLetters)
      if (this.getLetters().length === 0) {
        Enemy.delEnemy(this)
        return true
      }
    }
    return false;
  }

  public myToString(): string {
    var text: string = "";
    this.letters.forEach((l, i)=>{
      if (l !== undefined) {
        text += l
      }
      if (this.letters[i + 1]) {
        text += ", "
      }
    })
      
    return text
  }

  public abstract getFly(): boolean;
}