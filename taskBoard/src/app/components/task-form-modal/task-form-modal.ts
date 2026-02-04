import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import {LucideAngularModule, CirclePlus, X, SquarePen } from "lucide-angular";
import { ITaskFormModalData } from '../../interfaces/task-form-modal-data-interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ITaskFormControls } from '../../interfaces/task-form-controls-interface';

@Component({
  selector: 'app-task-form-modal',
  imports: [LucideAngularModule, ReactiveFormsModule],
  templateUrl: './task-form-modal.html',
  styleUrl: './task-form-modal.css',
})
export class TaskFormModal {
  readonly CirclePlus = CirclePlus;
  readonly X = X;
  readonly SquarePen = SquarePen;

  readonly _data: ITaskFormModalData = inject(DIALOG_DATA);
  readonly _dialogRef = inject(DialogRef);
  
  taskForm: FormGroup = new FormGroup({
    name: new FormControl(this._data.formValues.name, [Validators.required, Validators.minLength(5)]),

    description: new FormControl(this._data.formValues.description, [Validators.required, Validators.minLength(10)])
    
  })

  onFormSubmit() {
    this.closeModal(this.taskForm.value);
  }

  closeModal(formValues: ITaskFormControls | undefined = undefined) {
    this._dialogRef.close(formValues);
  }

}