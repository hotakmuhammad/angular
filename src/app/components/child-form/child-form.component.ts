import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './child-form.component.html',
  styleUrl: './child-form.component.css'
})
export class ChildFormComponent {


  courses = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'React' },
    { id: 3, name: 'Vue' },
    { id: 4, name: 'Node.js' },
    { id: 5, name: 'Python' },
    { id: 6, name: 'Java' },
    { id: 7, name: 'C#' },
    { id: 8, name: 'PHP' },
    { id: 9, name: 'Ruby' },
    { id: 10, name: 'Swift' }
  ]

  constructor() {
  }
  

  isFormVisible: boolean = false;

  inputValueName: string = '';
  inputValueAge: number = 0;

  inputValueCourseId: number = 0;
  inputValueCourseName: string = '';

  searchValue: string = '';
  handleSubmit(e: Event): void {
    e.preventDefault();
    console.log(e);
    alert('Form submitted!');

    const target = e.target as HTMLFormElement;
    const formDate = new FormData(target);

    const name: string = formDate.get('name')!.toString();
    const age: number = Number(formDate.get('age'));

    alert(`Name: ${name}, Age: ${age}`);

    
  }

  toggleForm(e: Event): void {
    this.isFormVisible = !this.isFormVisible;
    e.preventDefault();
  }

  deleteItem(index: number): void {
    this.courses.splice(index, 1);
    //console.log('Item deleted:', index);
    //this.courses = this.courses.filter(course => course.id !== courseId)
  }

  addCourse(e: Event): void {
    e.preventDefault();
    const newCourse = {
      id: this.courses.length + 1,
      name: this.inputValueCourseName
    };
    this.courses.push(newCourse);
    this.inputValueCourseName = '';
  }
  searchItem(): void {
   // e.preventDefault();
    const searchValue = this.searchValue.toLowerCase();
    this.courses = this.courses.filter(course => course.name.toLowerCase().includes(searchValue))
    
  
  }

}
