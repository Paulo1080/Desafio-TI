import { Component, OnInit } from '@angular/core';
import { RequestCreate } from '../user.model';
import { ResponseCreate } from '../user.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  request: RequestCreate = {
    name: '',
    job: '',
    last_name:'',
    email:'',
    age:''
    
  }

  response: ResponseCreate | any

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  save(){
    this.userService.createUser(this.request).subscribe(res => {
      this.response = res;
      alert(`Usuário Criado com Sucesso, Nome: ${res.name} .`);
    });
  }

}
