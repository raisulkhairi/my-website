import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  getUser: any;
  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.getUser().subscribe((res) => {
      console.log(res);
      this.getUser = res.result;
    });
  }
}
