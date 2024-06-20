import { Component, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { SecondsLeftService } from '../../services/seconds-left.service';

@Component({
  selector: 'seconds-left',
  templateUrl: './seconds-left.component.html',
  styleUrl: './seconds-left.component.scss'
})
export class SecondsLeftComponent {

  // ############################### START ##################################### \\

  // Performance optimized using the latest "inject" function, and subscribing
  // to the observable in the HTML file, using the "async pipe"
  // This ensures Angular takes care of subscriptions for you, by subscribing
  // automatically when the component is created and destroyed.

  secondsLeft$: Observable<number> = inject(SecondsLeftService).getSecondsLeftToDeadline();

  // ################################ END #################################### \\


  // ############################### START ##################################### \\

  // An alternative is using the "older way" (pre inject function) to
  // assign the observable by injecting the service into the constructor,
  // and then writing the required logic (in this case assigning the variable)
  // in the ngOnInit lifecycle hook.
  // And again, using the async pipe to manage subscriptions automatically.

  // constructor(
  //   private secondsService: SecondsLeftService
  // ) {}

  // ngOnInit() {
  //   this.secondsLeft$ = this.secondsService.getSecondsLeftToDeadline()
  // }

  // ################################ END #################################### \\


  // ############################### START ##################################### \\

  // You could off course manage subscriptions by yourself. But I don't see
  // how that will improve performance. And it will definitely bloat your
  // component unnecessarily.

  // ################################ END #################################### \\

}
