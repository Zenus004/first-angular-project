import { Component, Input, signal } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-user';
const random_Index = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {

  @Input() id !: string;
  @Input() avatar !: string;
  @Input() name !: string;
  onSelectUser() {
    console.log("The user click the button");
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }

  // selectedUser = signal (DUMMY_USERS[random_Index]);

  get imagePath(){
    return '/users/' + this.avatar
  }
}
