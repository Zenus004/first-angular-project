import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from '../dummy-user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  // template: 'Hello, {{title}}',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Satyajyoti';
  users = DUMMY_USERS;
  onSelectUser(id: string){
    console.log("Selected user is" + id);
  }
}
