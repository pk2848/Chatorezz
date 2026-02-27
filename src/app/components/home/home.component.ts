import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  floatingEmojis = [
    { emoji: '🍕', delay: '0s', duration: '3s', left: '10%', top: '20%' },
    { emoji: '🍔', delay: '0.5s', duration: '3.5s', left: '85%', top: '15%' },
    { emoji: '🌮', delay: '1s', duration: '4s', left: '75%', top: '70%' },
    { emoji: '🍜', delay: '1.5s', duration: '3.2s', left: '15%', top: '75%' },
    { emoji: '🥤', delay: '2s', duration: '3.8s', left: '50%', top: '85%' },
    { emoji: '🍱', delay: '0.8s', duration: '4.2s', left: '92%', top: '45%' },
    { emoji: '🌯', delay: '2.5s', duration: '3.6s', left: '5%', top: '50%' },
    { emoji: '🍦', delay: '1.2s', duration: '3.4s', left: '60%', top: '10%' },
  ];

  titleVisible = false;

  ngOnInit() {
    setTimeout(() => this.titleVisible = true, 300);
  }

  scrollToSection(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      const navHeight = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}
