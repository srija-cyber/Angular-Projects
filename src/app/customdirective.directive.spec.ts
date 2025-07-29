import { CustomdirectiveDirective } from './customdirective.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('CustomdirectiveDirective', () => {
  let mockElementRef: ElementRef;
  let mockRenderer: Renderer2;

  beforeEach(() => {
    mockElementRef = new ElementRef(document.createElement('div'));
    mockRenderer = jasmine.createSpyObj('Renderer2', ['setStyle']);
  });

  it('should create an instance', () => {
    const directive = new CustomdirectiveDirective(mockElementRef, mockRenderer);
    expect(directive).toBeTruthy();
  });
});
