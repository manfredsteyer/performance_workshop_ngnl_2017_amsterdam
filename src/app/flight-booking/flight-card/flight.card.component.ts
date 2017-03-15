import {
  Component, EventEmitter, Input, Output, OnChanges, AfterViewChecked, ChangeDetectionStrategy,
  ElementRef, NgZone
} from '@angular/core';
import { Flight } from '../../entities/flight';

@Component({
    selector: 'flight-card',
    templateUrl: './flight-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightCardComponent implements OnChanges {

    @Input() item: Flight;
    @Input() selectedItem: Flight;
    @Output() selectedItemChange = new EventEmitter<Flight>();

    constructor(private zone: NgZone, private element: ElementRef) {
    }

    ngOnChanges() {
      console.debug('on changes!');
    }

    select() {
        this.selectedItemChange.emit(this.item);
    }

    check() {
      this.blink();
      return null;
    }

    blink() {
      // Vorsicht: Direkter DOM-Zugriff !!!
      // Renderer
      this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';

      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          this.element.nativeElement.firstChild.style.backgroundColor = 'lightsteelblue';
        }, 1000);
      });
    }
}
