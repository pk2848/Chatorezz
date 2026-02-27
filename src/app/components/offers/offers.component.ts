import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Offer {
  id: number;
  title: string;
  description: string;
  discount: string;
  originalPrice: string;
  offerPrice: string;
  emoji: string;
  bgColor: string;
  badge: string;
  validUntil: string;
}

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent implements OnInit, OnDestroy {
  private timerInterval: ReturnType<typeof setInterval> | null = null;

  countdown = {
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  offers: Offer[] = [
    {
      id: 1,
      title: 'Student Combo Blast',
      description: 'Burger + Fries + Cold Drink — Perfect lunch deal for students',
      discount: '30% OFF',
      originalPrice: '₹350',
      offerPrice: '₹245',
      emoji: '🎓',
      bgColor: 'linear-gradient(135deg, rgba(249,115,22,0.2), rgba(239,68,68,0.2))',
      badge: 'Most Popular',
      validUntil: 'Today Only'
    },
    {
      id: 2,
      title: 'Family Feast Pack',
      description: '2 Mains + 2 Sides + 4 Drinks — Feed the whole family',
      discount: '25% OFF',
      originalPrice: '₹1200',
      offerPrice: '₹900',
      emoji: '👨‍👩‍👧‍👦',
      bgColor: 'linear-gradient(135deg, rgba(234,179,8,0.2), rgba(249,115,22,0.2))',
      badge: 'Best Value',
      validUntil: 'This Weekend'
    },
    {
      id: 3,
      title: 'Chai Pe Charcha',
      description: 'Any Snack + Masala Chai — The perfect evening combo',
      discount: '20% OFF',
      originalPrice: '₹180',
      offerPrice: '₹144',
      emoji: '☕',
      bgColor: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(234,179,8,0.2))',
      badge: 'Evening Special',
      validUntil: '5PM - 7PM Daily'
    },
    {
      id: 4,
      title: 'Chinese Fiesta',
      description: 'Choose any 3 Chinese items at a special bundle price',
      discount: '35% OFF',
      originalPrice: '₹550',
      offerPrice: '₹358',
      emoji: '🥢',
      bgColor: 'linear-gradient(135deg, rgba(239,68,68,0.2), rgba(236,72,153,0.2))',
      badge: 'Limited Time',
      validUntil: 'Ends Soon'
    }
  ];

  ngOnInit() {
    this.setCountdownTarget();
    this.startCountdown();
    this.initScrollObserver();
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  private setCountdownTarget() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    this.updateCountdown(midnight.getTime() - now.getTime());
  }

  private startCountdown() {
    this.timerInterval = setInterval(() => {
      const now = new Date();
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0);
      const diff = midnight.getTime() - now.getTime();
      if (diff <= 0) {
        this.setCountdownTarget();
      } else {
        this.updateCountdown(diff);
      }
    }, 1000);
  }

  private updateCountdown(diff: number) {
    this.countdown.hours = Math.floor(diff / (1000 * 60 * 60));
    this.countdown.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    this.countdown.seconds = Math.floor((diff % (1000 * 60)) / 1000);
  }

  pad(n: number): string {
    return n.toString().padStart(2, '0');
  }

  private initScrollObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    setTimeout(() => {
      document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));
    }, 100);
  }
}
