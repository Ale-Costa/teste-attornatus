import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  formulario: FormGroup;

 

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router:Router,
    @Inject(MAT_DIALOG_DATA) public data: number,
    ) {
      this.formulario = this.formBuilder.group({
        id: (Math.random() * 100).toFixed(0),
        nome: '',
        email: '',
        cpf: '',
        telefone: '',
        tipoTelefone: '',
      })
     }

  ngOnInit() {
    if(this.data){
      this.userService.getUser(this.data).subscribe(resposta =>{
        this.formulario.patchValue({
          id: resposta[0].id,
          nome: resposta[0].nome,
          email: resposta[0].email,
          cpf: resposta[0].cpf,
          telefone: resposta[0].telefone,
          tipoTelefone: resposta[0].tipoTelefone
        })
      })
    }
  }

  createUser(){
    this.userService.postUser(this.formulario.value).subscribe(resposta =>{
      console.log('Cadastrado!');
      window.location.reload()
    })
  }

  updateUser(){
    this.userService.updateUser(this.data, this.formulario.value).subscribe(resposta =>{
      console.log('Atualizado');
      window.location.reload()
    })  
  }

  saveButton(){
    if(this.data){
      this.updateUser();
    }else{
      this.createUser();
    }

  }

}
