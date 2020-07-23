import { Component, OnInit } from '@angular/core';

// Services
import { UserService } from '../../services/user.service';

// Models
import { IUserResponse, IUserData } from '../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  name : string;
  email : string;
  phone : number;
  picture : string;
  loading : string = 'Loading';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getRandomUser();
  }

  getRandomUser() {
    this.userService.getRandomName().subscribe((response) => {
      const temporalName: object = response.results[0].name;      
      this.name = `${temporalName.title} ${temporalName.first} ${temporalName.last} `;
      this.email = response.results[0].email;
      this.phone = response.results[0].phone;
      this.picture = response.results[0].picture.medium;
      console.log(response);
    });
  }
}
