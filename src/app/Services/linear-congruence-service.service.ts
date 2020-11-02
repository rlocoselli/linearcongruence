import { Injectable } from '@angular/core';
import { Congruence } from '../Models/congruence';

@Injectable({
  providedIn: 'root'
})
export class LinearCongruenceService {

  constructor() { }

  public CalculateNextCongruences(cong : Congruence) : number [] 
  {
    let ret: number [] = [];

    let remainder = cong.divided%cong.divisor;

    let current = cong.divided;

    for(let i=0;i<5;i++){
      current = current + cong.divisor;
      ret.push(current);
    }

    return ret;
  }
}
