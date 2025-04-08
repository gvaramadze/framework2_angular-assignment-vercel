import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api-data',
  imports: [CommonModule],
  templateUrl: './api-data.component.html',
  styleUrl: './api-data.component.css'
})
export class ApiDataComponent implements OnInit {
  posts: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPosts().subscribe(data => {
      this.posts = data;
      console.log('API response:', this.posts);
    });
  }
}