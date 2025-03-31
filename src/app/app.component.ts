import { Component } from '@angular/core';
import { MyFirstComponentComponent } from "./components/my-first-component/my-first-component.component";
import { ChildFormComponent } from "./components/child-form/child-form.component";



interface Person{
  name: string,
  age: number
}

@Component({
  selector: 'app-root',
  imports: [MyFirstComponentComponent, ChildFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
    console.log("AppComponent Constructor Formation angular")
  }
  
  // simple type
  myNum: number = 50;
  myName: string = 'Angular';
  myBool: boolean = true;



  //Object and table
  fruits: string [] = ['apple', 'banana', 'orange']
  myNumArray: number[] = [1, 2, 3, 4, 5]

  person: { name: string, age: number } = {
    name: '',
    age: 0
  }
    
  user1: Person = {
    name: 'Shahid',
    age: 24
  }

  add(a: number, b: number): number {
    return a + b;
  }

  sub(a: number, b: number): void {
    console.log(a - b);
  }

  user: Person = {
    name: 'Shahid',
    age: 24
  }
}

interface Person2 {
  name: string,
  age: number
  greet(): string
}

class Person2 implements Person2 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
