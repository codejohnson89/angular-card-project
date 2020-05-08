import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imgUrl: 'assets/tree.jpeg',
      username: '@nature',
      content: 'Saw this awesome tree today'
    },
    {
      title: 'Tall mountain',
      imgUrl: 'assets/mountain.jpeg',
      username: '@hiker',
      content: 'Went hiking today in Arbuckle mountain'
    },
    {
      title: 'Cool bike',
      imgUrl: 'assets/biking.jpeg',
      username: '@biker',
      content: 'Went riding today at Lake Hefner'
    }
  ]
}
