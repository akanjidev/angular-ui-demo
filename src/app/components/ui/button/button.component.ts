import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() variant: string = 'default'; // Default variant
  @Input() size: string = 'default'; // Default size
  @Input() disabled: boolean = false;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  // Define button classes based on variant and size
  @HostBinding('class') get buttonClasses(): string {
    let classes = 'rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring';

    switch (this.variant) {
      case 'default':
        classes += ' bg-primary text-primary-foreground shadow hover:bg-primary/90';
        break;
      case 'destructive':
        classes += ' bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90';
        break;
      case 'outline':
        classes += ' border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground';
        break;
      case 'secondary':
        classes += ' bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80';
        break;
      case 'ghost':
        classes += ' hover:bg-accent hover:text-accent-foreground';
        break;
      case 'link':
        classes += ' text-primary underline-offset-4 hover:underline';
        break;
      default:
        classes += ' bg-primary text-primary-foreground shadow hover:bg-primary/90';
    }

    switch (this.size) {
      case 'default':
        classes += ' h-9 px-4 py-2';
        break;
      case 'sm':
        classes += ' h-8 rounded-md px-3 text-xs';
        break;
      case 'lg':
        classes += ' h-10 rounded-md px-8';
        break;
      case 'icon':
        classes += ' h-9 w-9';
        break;
      default:
        classes += ' h-9 px-4 py-2';
    }

    if (this.disabled) {
      classes += ' disabled:pointer-events-none disabled:opacity-50';
    }

    return classes;
  }
}
