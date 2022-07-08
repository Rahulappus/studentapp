import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=[
  {"name":"bharath","age":21,"photo":"https://res.cloudinary.com/demo/image/facebook/65646572251.jpg"},
  {"name":"jishnu","age":21,"photo":"https://res.cloudinary.com/demo/image/facebook/65646572251.jpg"},
  {"name":"nibin","age":21,"photo":"https://res.cloudinary.com/demo/image/facebook/65646572251.jpg"},
  {"name":"sudhil","age":21,"photo":"https://res.cloudinary.com/demo/image/facebook/65646572251.jpg"},
  {"name":"naveen","age":21,"photo":"https://res.cloudinary.com/demo/image/facebook/65646572251.jpg"},
  {"name":"athul","age":21,"photo":"https://res.cloudinary.com/demo/image/facebook/65646572251.jpg"},
  ]

}
