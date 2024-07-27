import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from '../../components/product-card/product-card.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  gameOptions = [
    {
      title: 'Albion',
      imgUrl: '/assets/images/albion.png',
    },
    { title: 'Final Fantasy', imgUrl: '/assets/images/final-fantasy.png' },
    { title: 'Rs3', imgUrl: '/assets/images/rs3.png' },
  ];
  items = Array(12).fill(0);
}
