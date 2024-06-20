import { Injectable } from '@angular/core';

// A mock interface (usually extracted to an interface file)
export interface ICamera {
  id: string;
  make: string;
  model: string;
  minLumens: number;
  maxLumens: number;
  minDistance: number;
  maxDistance: number;
}

@Injectable({
  providedIn: 'root'
})
export class SoftwareCameraService {

  // ############################### START ##################################### \\

  // If you need to trigger multiple cameras, i.e. all cameras that meets
  // the light level and distance criteria, you have to check ALL cameras
  // to be able to create a filtered list of cameras that can take the shot.

  selectAllCameras(distance: number, lumens: number, cameraList: ICamera[]) {

    return cameraList.filter(camera => (
        camera.minLumens <= lumens &&
        camera.maxLumens >= lumens &&
        camera.minDistance <= distance &&
        camera.maxDistance >= distance
      ))

  }

  // ################################ END #################################### \\


  // ############################### START ##################################### \\

  // If you're looking for only ONE camera to take the shot, you don't need
  // to check all the cameras. So you can iterate over the cameras, and as
  // soon as you've found the first match, you can trigger the shot!

  selectFirstCamera(distance: number, lumens: number, cameraList: ICamera[]) {

    let firstCamera: ICamera | null = null;

    for (let index = 0; index < cameraList.length; index++) {
      const camera = cameraList[index];
      if(
        camera.minLumens <= lumens &&
        camera.maxLumens >= lumens &&
        camera.minDistance <= distance &&
        camera.maxDistance >= distance
        ) {
          firstCamera = camera;
          break;
        }
    }

    return firstCamera;

  }
  // ################################ END #################################### \\

}
