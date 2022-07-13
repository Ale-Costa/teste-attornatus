import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
    ) {
      
     }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      id: 10,
      email: '',
      nome: '',
      cpf: '',
      telefone: '',
      tipoTelefone: '',
    })
  }


  createUser(){
    this.userService.postUser(this.formulario.value).subscribe(resposta =>{
      console.log(this.formulario.value);
    })
  }

}
