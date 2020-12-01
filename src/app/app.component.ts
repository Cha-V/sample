import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleCalculator';
public number1:number;
public number2:number;
public number3:number;

add()
{
  this.number3=this.number1+this.number2;
  localStorage.addItem('History',JSON.stringify(this.number1+this.number2)+" = "+JSON.stringify(this.number3))
}

subtract()
{
  this.number3=this.number1-this.number2;
  localStorage.addItem('History',JSON.stringify(this.number1+this.number2)+" - "+JSON.stringify(this.number3))
}

multiply()
{
  this.number3=this.number1*this.number2;
  localStorage.addItem('History',JSON.stringify(this.number1+this.number2)+" * "+JSON.stringify(this.number3))
}

division()
{
  this.number3=this.number1/this.number2;
  localStorage.addItem('History',JSON.stringify(this.number1+this.number2)+" / "+JSON.stringify(this.number3))
}

modulus()
{
  this.number3=this.number1%this.number2;
  localStorage.addItem('History',JSON.stringify(this.number1+this.number2)+" % "+JSON.stringify(this.number3))
}



}