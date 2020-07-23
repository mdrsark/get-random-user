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

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getRandomUser();
  }

  getRandomUser() {
    this.userService.getRandomName().subscribe((response) => {
      console.log(response);
    });
  }
}
