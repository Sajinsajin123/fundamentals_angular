import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  users = [
    { name: 'sajin', age: '20', country: 'India', place: 'kanniyakumari' },
    { name: 'des', age: '30', country: 'US', place: 'usd' },
    { name: 'ajish', age: '23', country: 'America', place: 'dev' },
    { name: 'buvi', age: '27', country: 'Londan', place: 'los' },
    { name: 'bringo', age: '25', country: 'China', place: 'kuks' },
  ];
}
