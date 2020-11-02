import { Component, OnInit } from '@angular/core';
import { LinearCongruenceService } from './Services/linear-congruence-service.service';
import { Congruence } from './Models/congruence';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  congruences : number [];
  congruenceForm;
  cong : Congruence = new Congruence();
  isValid : boolean = true;

  constructor(private ls : LinearCongruenceService, private form : FormsModule){

  }

  ngOnInit(): void {
    this.cong.divisor = 0;
    this.cong.divided = 0;
  }
  
  onSubmit(form : NgForm){
    console.warn(form);
    if(this.cong.divided == 0 || this.cong.divided == 0){
      this.isValid = false;
    }
    else
    {
      this.isValid = true;
      this.congruences = this.ls.CalculateNextCongruences(this.cong);
    }
  }
}
