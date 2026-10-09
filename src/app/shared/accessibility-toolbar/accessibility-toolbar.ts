
import { Component } from '@angular/core';

@Component({
  selector: 'app-accessibility-toolbar',
  standalone: true,
  templateUrl: './accessibility-toolbar.html',
  styleUrl: './accessibility-toolbar.scss'
})
export class AccessibilityToolbar {
  textSize = 100;
  highContrast = false;

  increaseText(): void {
    this.textSize = Math.min(130, this.textSize + 10);
    this.applySettings();
  }

  decreaseText(): void {
    this.textSize = Math.max(90, this.textSize - 10);
    this.applySettings();
  }

  resetSettings(): void {
    this.textSize = 100;
    this.highContrast = false;
    this.applySettings();
  }

  toggleContrast(): void {
    this.highContrast = !this.highContrast;
    this.applySettings();
  }

  private applySettings(): void {
    document.documentElement.style.setProperty(
      '--user-font-scale',
      `${this.textSize / 100}`
    );

    document.documentElement.classList.toggle(
      'high-contrast',
      this.highContrast
    );
  }
}