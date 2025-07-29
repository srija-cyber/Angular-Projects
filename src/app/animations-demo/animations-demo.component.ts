import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-animations-demo',
  imports:[],
  templateUrl: './animations-demo.component.html',
  styleUrls: ['./animations-demo.component.css'],
  animations: [
    // 1. Fade In/Out
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0 })),
      transition('in <=> out', animate('300ms ease-in-out'))
    ]),

    // 2. Slide In/Out X-axis
    trigger('slideX', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(-100%)' })),
      transition('in <=> out', animate('300ms ease-in-out'))
    ]),

    // 3. Slide In/Out Y-axis
    trigger('slideY', [
      state('in', style({ transform: 'translateY(0)' })),
      state('out', style({ transform: 'translateY(-100%)' })),
      transition('in <=> out', animate('300ms ease-in-out'))
    ]),

    // 4. Collapse/Expand
    trigger('collapseExpand', [
      state('collapsed', style({ height: '0px', overflow: 'hidden' })),
      state('expanded', style({ height: '*' })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out'))
    ]),

    // 5. Scale/Zoom
    trigger('scale', [
      state('normal', style({ transform: 'scale(1)' })),
      state('scaled', style({ transform: 'scale(1.2)' })),
      transition('normal <=> scaled', animate('200ms ease-in-out'))
    ]),

    // 6. Rotate
    trigger('rotate', [
      state('normal', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate(180deg)' })),
      transition('normal <=> rotated', animate('300ms ease-in-out'))
    ]),

    // 7. Shake
    trigger('shake', [
      transition('false => true', [
        animate('500ms', keyframes([
          style({ transform: 'translateX(0)', offset: 0 }),
          style({ transform: 'translateX(-10px)', offset: 0.1 }),
          style({ transform: 'translateX(10px)', offset: 0.2 }),
          style({ transform: 'translateX(-10px)', offset: 0.3 }),
          style({ transform: 'translateX(10px)', offset: 0.4 }),
          style({ transform: 'translateX(-10px)', offset: 0.5 }),
          style({ transform: 'translateX(10px)', offset: 0.6 }),
          style({ transform: 'translateX(-10px)', offset: 0.7 }),
          style({ transform: 'translateX(10px)', offset: 0.8 }),
          style({ transform: 'translateX(-10px)', offset: 0.9 }),
          style({ transform: 'translateX(0)', offset: 1.0 })
        ]))
      ])
    ]),

    // 8. Flip (Y-axis)
    trigger('flipY', [
      state('front', style({ transform: 'rotateY(0)' })),
      state('back', style({ transform: 'rotateY(180deg)' })),
      transition('front <=> back', animate('500ms ease-in-out'))
    ]),

    // 9. Skew
    trigger('skew', [
      state('normal', style({ transform: 'skewX(0)' })),
      state('skewed', style({ transform: 'skewX(20deg)' })),
      transition('normal <=> skewed', animate('200ms ease-in-out'))
    ]),

    // 10. Bounce
    trigger('bounce', [
      transition('false => true', [
        animate('1000ms', keyframes([
          style({ transform: 'translateY(0)', offset: 0 }),
          style({ transform: 'translateY(-30px)', offset: 0.3 }),
          style({ transform: 'translateY(0)', offset: 0.5 }),
          style({ transform: 'translateY(-15px)', offset: 0.7 }),
          style({ transform: 'translateY(0)', offset: 0.9 })
        ]))
      ])
    ]),

    // 11. Zoom Out/Shrink
    trigger('zoomOut', [
      state('in', style({ transform: 'scale(1)', opacity: 1 })),
      state('out', style({ transform: 'scale(0.5)', opacity: 0 })),
      transition('in => out', animate('300ms ease-in-out'))
    ]),

    // 12. Grow Width/Height
    trigger('grow', [
      state('small', style({ width: '100px', height: '50px' })),
      state('large', style({ width: '300px', height: '150px' })),
      transition('small <=> large', animate('500ms ease-in-out'))
    ]),

    // 13. Slide with Opacity
    trigger('slideWithOpacity', [
      state('in', style({ transform: 'translateX(0)', opacity: 1 })),
      state('out', style({ transform: 'translateX(100%)', opacity: 0 })),
      transition('in <=> out', animate('300ms ease-in-out'))
    ]),

    // 14. Fade + Expand
    trigger('fadeExpand', [
      state('collapsed', style({ height: '0px', opacity: 0, overflow: 'hidden' })),
      state('expanded', style({ height: '*', opacity: 1 })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out'))
    ]),

    // 15. Flip with RotateY
    trigger('flipRotateY', [
      state('front', style({ transform: 'rotateY(0)' })),
      state('back', style({ transform: 'rotateY(180deg)' })),
      transition('front <=> back', animate('500ms ease-in-out'))
    ]),

    // 16. Progress Bar Fill
    trigger('progressFill', [
      state('start', style({ width: '0%' })),
      state('end', style({ width: '100%' })),
      transition('start => end', animate('2000ms ease-in-out'))
    ])
  ]
})
export class AnimationsDemoComponent {
  // Animation states
  fadeState = 'in';
  slideXState = 'in';
  slideYState = 'in';
  collapseState = 'expanded';
  scaleState = 'normal';
  rotateState = 'normal';
  shakeState = false;
  flipState = 'front';
  skewState = 'normal';
  bounceState = false;
  zoomOutState = 'in';
  growState = 'small';
  slideOpacityState = 'in';
  fadeExpandState = 'collapsed';
  flipRotateState = 'front';
  progressState = 'start';

  // Toggle methods
  toggleFade() { this.fadeState = this.fadeState === 'in' ? 'out' : 'in'; }
  toggleSlideX() { this.slideXState = this.slideXState === 'in' ? 'out' : 'in'; }
  toggleSlideY() { this.slideYState = this.slideYState === 'in' ? 'out' : 'in'; }
  toggleCollapse() { this.collapseState = this.collapseState === 'expanded' ? 'collapsed' : 'expanded'; }
  toggleScale() { this.scaleState = this.scaleState === 'normal' ? 'scaled' : 'normal'; }
  toggleRotate() { this.rotateState = this.rotateState === 'normal' ? 'rotated' : 'normal'; }
  triggerShake() { this.shakeState = !this.shakeState; }
  toggleFlip() { this.flipState = this.flipState === 'front' ? 'back' : 'front'; }
  toggleSkew() { this.skewState = this.skewState === 'normal' ? 'skewed' : 'normal'; }
  triggerBounce() { this.bounceState = !this.bounceState; }
  triggerZoomOut() { this.zoomOutState = 'out'; setTimeout(() => this.zoomOutState = 'in', 1000); }
  toggleGrow() { this.growState = this.growState === 'small' ? 'large' : 'small'; }
  toggleSlideOpacity() { this.slideOpacityState = this.slideOpacityState === 'in' ? 'out' : 'in'; }
  toggleFadeExpand() { this.fadeExpandState = this.fadeExpandState === 'expanded' ? 'collapsed' : 'expanded'; }
  toggleFlipRotate() { this.flipRotateState = this.flipRotateState === 'front' ? 'back' : 'front'; }
  startProgress() { this.progressState = 'start'; setTimeout(() => this.progressState = 'end', 100); }
}