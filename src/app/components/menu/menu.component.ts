import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  name: string;
  price: string;
  description: string;
}

interface MenuCategory {
  id: string;
  name: string;
  emoji: string;
  description: string;
  color: string;
  bgGradient: string;
  items: MenuItem[];
  expanded: boolean;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  categories: MenuCategory[] = [
    {
      id: 'fast-food',
      name: 'Fast Food',
      emoji: '🍔',
      description: 'Crispy, juicy and loaded with flavors. Our fast food will keep you coming back for more!',
      color: 'from-yellow-500 to-orange-500',
      bgGradient: 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10',
      expanded: false,
      items: [
        { name: 'Double Smash Burger', price: '₹199', description: 'Double patty with special sauce' },
        { name: 'Crispy Chicken Wrap', price: '₹149', description: 'Tender chicken in soft tortilla' },
        { name: 'Loaded Cheese Fries', price: '₹129', description: 'Crispy fries with melted cheese' },
        { name: 'Chatorezz Special Burger', price: '₹229', description: 'Our signature must-try burger' },
        { name: 'Veg Patty Burger', price: '₹139', description: 'Crispy veg patty with lettuce' },
      ]
    },
    {
      id: 'chinese',
      name: 'Chinese',
      emoji: '🍜',
      description: 'Indo-Chinese delights made with authentic spices and fresh ingredients.',
      color: 'from-red-500 to-pink-500',
      bgGradient: 'bg-gradient-to-br from-red-500/10 to-pink-500/10',
      expanded: false,
      items: [
        { name: 'Schezwan Fried Rice', price: '₹159', description: 'Spicy rice with vegetables' },
        { name: 'Hakka Noodles', price: '₹149', description: 'Classic tossed noodles' },
        { name: 'Chilli Paneer', price: '₹199', description: 'Paneer in spicy sauce' },
        { name: 'Manchurian Gravy', price: '₹179', description: 'Soft dumplings in sauce' },
        { name: 'Spring Rolls', price: '₹119', description: 'Crispy vegetable rolls' },
      ]
    },
    {
      id: 'north-indian',
      name: 'North Indian',
      emoji: '🍛',
      description: 'Rich, aromatic curries and breads straight from the heart of Punjab.',
      color: 'from-orange-500 to-amber-500',
      bgGradient: 'bg-gradient-to-br from-orange-500/10 to-amber-500/10',
      expanded: false,
      items: [
        { name: 'Butter Chicken', price: '₹249', description: 'Creamy tomato based curry' },
        { name: 'Dal Makhani', price: '₹199', description: 'Slow cooked black lentils' },
        { name: 'Paneer Tikka', price: '₹229', description: 'Grilled marinated paneer' },
        { name: 'Garlic Naan', price: '₹49', description: 'Soft leavened flatbread' },
        { name: 'Rajma Chawal', price: '₹179', description: 'Red kidney beans with rice' },
      ]
    },
    {
      id: 'beverages',
      name: 'Beverages',
      emoji: '🥤',
      description: 'Refreshing drinks to wash down your meal, from fresh juices to mocktails.',
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10',
      expanded: false,
      items: [
        { name: 'Mango Lassi', price: '₹99', description: 'Thick mango yogurt drink' },
        { name: 'Virgin Mojito', price: '₹119', description: 'Mint, lime, soda refresher' },
        { name: 'Cold Coffee', price: '₹129', description: 'Chilled coffee with cream' },
        { name: 'Fresh Lime Soda', price: '₹79', description: 'Sweet or salted lime soda' },
        { name: 'Masala Chai', price: '₹49', description: 'Spiced Indian tea' },
      ]
    }
  ];

  ngOnInit() {
    this.initScrollObserver();
  }

  toggleCategory(category: MenuCategory) {
    category.expanded = !category.expanded;
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
