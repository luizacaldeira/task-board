import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { L } from '@angular/cdk/keycodes';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucideAngularModule, X, SquareStar, Trash, ArrowUp } from 'lucide-angular';
import { IComment } from '../../interfaces/comment-interface';
import { GenerateUniqueId } from '../../utils/generate-unique-id';
import { ITask } from '../../interfaces/task-interface';

@Component({
  selector: 'app-task-comments-modal',
  imports: [LucideAngularModule, ReactiveFormsModule],
  templateUrl: './task-comments-modal.html',
  styleUrl: './task-comments-modal.css',
})
export class TaskCommentsModal {
  commentControl = new FormControl('', [Validators.required]);
  taskCommentChanged: boolean = false;
  thisHour = new Date();

  @ViewChild('commentInput') commentInputRef! : ElementRef<HTMLInputElement>;

  //Icons
  readonly X = X;
  readonly SquareStar  = SquareStar;
  readonly Trash = Trash;
  readonly ArrowUp = ArrowUp;

  readonly _task: ITask = inject(DIALOG_DATA);
  readonly _dialogRef: DialogRef<Boolean> = inject(DialogRef);


  onAddComment(){
    const newComment : IComment = {
      id: GenerateUniqueId(),
      description: this.commentControl.value ?  this.commentControl.value : "",
    }
    this._task.comments.unshift(newComment);
    this.commentControl.reset();
    this.commentControl.markAsUntouched();
    this.taskCommentChanged = true;

    this.commentInputRef.nativeElement.focus();
  }

  onCloseModal(){
    this._dialogRef.close(this.taskCommentChanged);
  }

  onRemoveComment( commentId : string){
    this.commentControl.markAsUntouched();
    this._task.comments = this._task.comments.filter((comment) => comment.id !== commentId);
    this.taskCommentChanged = true;
  }

  getHourAndMinutes(date: Date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
}
