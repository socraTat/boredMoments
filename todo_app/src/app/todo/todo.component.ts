import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { tasks } from '../task';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoForm!: FormGroup;

  tasks: tasks [] = [];
  inProgress: tasks [] = [];
  done: tasks[] = [];

  updateIndex!:any;
  isEditable: boolean = false;






  

  constructor(private formB: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.formB.group({
      item: ['' ,Validators.required]
    })
  }


  addTask(){
    this.tasks.push({
      description:this.todoForm.value.item,
      done: false
    });
    this.todoForm.reset();
  }

  deleteTask(i: number){
    this.tasks.splice(i, 1);
  }

  deleteinProgress(i: number){
    this.inProgress.splice(i, 1);
  }

  deleteDone(i: number){
    this.done.splice(i, 1);
  }

  updateTask(item: tasks, i: number){
    this.todoForm.controls['item'].setValue(item.description);
    this.updateIndex = i;
    this.isEditable = true;
  }

  update(){
    this.tasks[this.updateIndex].description = this.todoForm.value.item;
    this.tasks[this.updateIndex].done = false;
    this.todoForm.reset();
    this.updateIndex = undefined;
    this.isEditable = false;
  }





  drop(event: CdkDragDrop<tasks[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
