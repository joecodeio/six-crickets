import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, interval, map, of, switchMap, take } from 'rxjs';

// A mock interface (usually extracted to an interface file)
interface ISecondsLeftResponse {
  secondsLeft: number;
}

// a mock environment variable (usually hosted in a separate environment file)
const HTTP_SERVER = "https://www.thecoolandwhacky.server";

@Injectable({
  providedIn: 'root'
})
export class SecondsLeftService {

  // the mock api endpoint (can also be hosted in a separate file, like in the environment file)
  secondsLeftEndPoint: string = "api/deadline";

  constructor(
    private http: HttpClient
  ) { }

  // ############################### START ##################################### \\

  getSecondsLeftToDeadline(): Observable<number> {

    // ** What the mock API server return statement would look like in it's basic form
    // ** and by "basic" I refer to it not tending to error handling, for example, or
    // ** dealing with exceptions etc.

    // return this.http.get<ISecondsLeftResponse>(`${HTTP_SERVER}/${this.secondsLeftEndPoint}`)
    return of<ISecondsLeftResponse>({secondsLeft: 10}) // A dummy observable - toggle comment to see it in action
    .pipe(
      take(1), // to make sure you only get one value, and then complete the initial observable
      switchMap(response => { // use the response and switch to the countdown observable

        // ** handle 0 seconds remaining exception
        if(response.secondsLeft === 0) {
          return of(0)
        } else {
          return interval(1000).pipe(
            map(timePassedInSeconds => { // map the object to return a simple number value
              let secondsLeft = response.secondsLeft - timePassedInSeconds;
              if(secondsLeft > 0) {
                return secondsLeft
              } else {
                return 0
              }
              //! REFACTORED
              // return response.secondsLeft - timePassedInSeconds; // return the "updated seconds left" value
            })
            // ** you could work in the "takeUntil" operator here, create a Subject in the service
            // ** and then trigger this observable once the counter hits zero to force the interval
            // ** timer to stop emitting values.
          )
        }
      })
    )
  }
  // ################################ END #################################### \\


  // ############################### START ##################################### \\

  // You could off course consider keeping the observable in state.

  // What this would do is minimize API calls, by subscribing to the API call here
  // in the service, taking one value (by using the "take(1)" RxJS operator) and
  // passing that value to a number variable, signal, or BehaviorSubject that you
  // could then set up to keep iterating through the countdown, no matter the state
  // of the component.

  // On Init, the component can check if the API has been called. For example, by
  // checking if the value that you set when the API has been successfully called.

  // If the value is "falsy", call the API, and that triggers the state Observable
  // with the latest value.

  // But either way, the component will then subscribe to the "state Observable"
  // to get the latest countdown.

  // The downside off course, is what if the front some how gets out of sync. Then
  // the application will provide the state calculated variable, and not resynchronize
  // with the backend to confirm the latest calculated "seconds left" value.

  // ################################ END #################################### \\

}
