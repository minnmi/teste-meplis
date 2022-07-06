import { Component, OnInit } from '@angular/core';
import { RandomNumberService } from './randomnumber.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'teste-meplis';
  constructor(
    private randomNumberService: RandomNumberService) {

  }

  ngOnInit() {
    console.log(this.title);
  }

  async loadData() {
    const response = await this.randomNumberService.getRandomNumber();
    // if (!response?.success) {
    //   return;
    // }
    console.log(response);
  }
}
