import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  // principal(): void {
  //     this.router.navigate(['/pages/home']);
  // }
  // operacion(): void {
  //     this.router.navigate(['/pages/operacion']);
  // }

  ngOnInit() {
  }

}
