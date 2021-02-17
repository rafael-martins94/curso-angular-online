import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  texto_main = "Eu sou texto do main"

  constructor() { }

  ngOnInit(): void {
  }

}
