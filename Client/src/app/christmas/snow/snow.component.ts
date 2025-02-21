import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-snow',
  standalone: true,
  imports: [],
  templateUrl: './snow.component.html',
  styleUrl: './snow.component.css'
})
export class SnowComponent implements OnInit {  
  emojiColletion = ['❅','❆','❅','❆','❅']
  particles = 80;
  innerWidth = window.innerWidth;

  constructor(private renderer: Renderer2, public el: ElementRef) { }

  ngOnInit(): void {
    this.createParticles();
  }

  createParticles() {
    for (let i= 0; i < this.particles; i++){
      let randomEmojy = this.emojiColletion[Math.floor(Math.random() * this.emojiColletion.length)]
      let emojyLeftPosition = (this.innerWidth/this.particles) * i;
      let span = this.renderer.createElement('span');
      let text = this.renderer.createText(randomEmojy);
      this.renderer.appendChild(span, text);
      this.renderer.addClass(span, 'snowflake');
      this.renderer.setStyle(span, 'left', emojyLeftPosition + 'px');
      this.renderer.setStyle(span, 'animation-duration', (this.randomMinMax(3, 5.0) + 's' , this.randomMinMax(3, 5.0) + 's'));
      this.renderer.setStyle(span, 'animation-delay', this.randomMinMax(0.3, 2.0) + 's');
      this.renderer.appendChild(this.el.nativeElement, span);
    }
  }

  randomMinMax(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
}
