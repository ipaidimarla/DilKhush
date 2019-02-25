import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-cook-book',
  templateUrl: './cook-book.component.html',
  styleUrls: ['./cook-book.component.css']
})
export class CookBookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  handleLoad(event){
    alert(event.target.href)
  }

}
