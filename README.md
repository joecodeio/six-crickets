# Six Crickets | Angular Test Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Questions Covered in this application

### 1 - Angular

There is an API endpoint called /api/deadline which returns { secondsLeft: number } JSON object containing the number of seconds left to some constant deadline date (deadline date never changes). Write an Angular component (and any other Angular classes/functions if needed) that will retrieve data from backend and will display “Seconds left to deadline: X” countdown timer (X should be updated every second). Please take your time to write performance optimized code.

### 2 - General

[The author of this story problem is neither a photographer nor a hardware engineer, so please forgive any implausibility.] Suppose we want to construct a versatile software camera by combining many inflexible hardware cameras. Each hardware camera works well for a particular range of subject distances and for a particular range of light levels. The software camera will measure the light level and subject distance of each shot and choose an appropriate hardware camera to capture it. Write a function that takes the desired characteristics of the software camera (range of subject distances and range of light levels that it should support) and a list of hardware cameras with their respective characteristics, and tests whether that set of hardware cameras will suffice.

## Scaffolding to Relevant Files

```

---- app
    |
    ---- Components
        |
        ---- SecondsLeftComponent
    |
    ---- Services
        |
        ---- SecondsLeftService
        ---- SoftwareCameraService

```

## General Description

This application is built using Angular V17, and it includes the code for both questions. In addition, it displays some test / dummy data, for simple visual confirmation.

### Seconds Left

The "seconds left component" can display data from a mock observable in the “seconds left service”.

If you want to see it in action, disable the dummy API call, and enable the mock observable on lines 33 and 34.<br>
(Data will display in the top right corner of the browser window)

### The Camera Conundrum

The camera selector component showcases the results from two methods, using a dummy list of cameras, and 2 identical sets of light and distance readings as inputs.

This is meant to be a visual representation of the difference between the two methods in the service.

One method caters for only one photo / shot to be taken at a time.

The other optionally covers an instance where if one should wish to consider taking a shot with all cameras that has the capacity to do so, now you can. Or at the least, you'll have a list of all of the ones that will take a decent photo.

In short, the "selectFirstCamera" method loops over the list of cameras, checks for a match, takes the first camera it finds as a match, and breaks out of the list iteration (to save processing power), and triggers the response right away.

The "selectAllCameras" method iterates over the entire list for matches, before returning every match it finds (a list of matching cameras).

You will also find additional notes in the files to help describe reason (or madness).

Enjoy!