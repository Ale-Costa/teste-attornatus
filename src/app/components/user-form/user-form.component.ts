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
    private userService: UserService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      id: (Math.random() * 100).toFixed(0),
      nome: '',
      email: '',
      cpf: '',
      telefone: '',
      tipoTelefone: '',
    })    
  }

  createUser(){
    this.userService.postUser(this.formulario.value).subscribe(resposta =>{
      console.log('Cadastrado!');
    })
  }

}
