import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<User> = [];

  constructor(public dialog: MatDialog, private userService:UserService) { }

  ngOnInit() {
    //this.getUsers();
  }

  openDialog(id){
    this.dialog.open(UserFormComponent, {
      data: id
    });
  }

  getUsers(){
    this.userService.getUsers().subscribe(resposta =>{
      this.users = resposta;
      console.log(this.users);
    })
  }

  deleteUser(id){
    this.userService.deleteUser(id).subscribe(resposta =>{
      console.log('deletado');
    })
  }

}
