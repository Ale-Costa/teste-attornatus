import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(){
    this.dialog.open(UserFormComponent);
  }

}
