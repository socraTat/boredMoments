import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoForm!: FormGroup;


  constructor(private formB: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.formB.group({
      item: ['' ,Validators.required]
    })
  }

}
