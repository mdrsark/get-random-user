import { Component, OnInit } from '@angular/core';

// Services
import { UserService } from '../../services/user.service';

// Models
import { IUserResults, IUserInfo } from '../models/user.module';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  name : string;
  email : string;
  phone : string;
  picture : string;
  loading : string = 'Loading';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getRandomUser();
  }

  getRandomUser() {
    this.userService.getRandomName().subscribe((response: IUserResults) => {
      const uInfo: IUserInfo = response.results[0]; 
      this.name = `${uInfo.name.title} ${uInfo.name.title} ${uInfo.name.last}`;
      this.email = uInfo.email;
      this.phone = uInfo.phone;
      this.picture = uInfo.picture.medium;
      console.log(response);
    });
  }
}
