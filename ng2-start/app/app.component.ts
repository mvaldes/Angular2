import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
    selector: 'my-app',
    templateUrl: `./app/app.component.html`,
    styleUrls: ['./app/app.component.css']
})
export class AppComponent{
    message:string = "Hello";
    users: User[] = [
        {id:25, name: 'Mark', username: 'Venezuela'},
        {id:26, name: 'John', username: 'Chile'},
        {id:27, name: 'Lucas', username: 'Brazil'}
        ];
    activeUser:User;

    selectUser(user){
        this.activeUser = user;
        console.log(this.activeUser);
    }
 }