import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserFormComponent } from '../user-form/user-form.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog){

  }

  ngOnInit(): void {
  }
  
  openDialog(){    
    this.dialog.open(UserFormComponent);
  }

}




