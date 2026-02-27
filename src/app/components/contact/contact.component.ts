import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  success = false;

  contactInfo = [
    { icon: '📍', title: 'Location', detail: 'Phase 7, Mohali, Punjab 160059', sub: 'Near ISBT, Mohali' },
    { icon: '📞', title: 'Phone', detail: '+91 98765 43210', sub: 'Call us for orders & queries' },
    { icon: '🕐', title: 'Hours', detail: 'Mon–Fri: 11AM – 11PM', sub: 'Sat–Sun: 10AM – 12AM' },
    { icon: '📧', title: 'Email', detail: 'hello@chatorezz.com', sub: 'We reply within 24hrs' },
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^\+?[0-9\s\-]{10,15}$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {
    this.initScrollObserver();
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      this.success = true;
      this.contactForm.reset();
      this.submitted = false;
      setTimeout(() => this.success = false, 5000);
    }
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
