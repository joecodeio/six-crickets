import { Component, inject } from '@angular/core';
import { ICamera, SoftwareCameraService } from '../../services/software-camera.service';

@Component({
  selector: 'camera-selector',
  templateUrl: './camera-selector.component.html',
  styleUrl: './camera-selector.component.scss'
})
export class CameraSelectorComponent {

  selectedCameras = inject(SoftwareCameraService).selectAllCameras(9000, 350, CAMERAS);
  selectedCamera = inject(SoftwareCameraService).selectFirstCamera(9000, 350, CAMERAS);

}


const CAMERAS: ICamera[] = [
  {
    id: 'sdfv2345vd',
    make: 'Sony',
    model: 'DSLR-A200',
    minLumens: 0,
    maxLumens: 100,
    minDistance: 500,
    maxDistance: 5000
  },
  {
    id: 'sdf45cgh',
    make: 'GoPro',
    model: 'Hero 9',
    minLumens: 101,
    maxLumens: 200,
    minDistance: 3000,
    maxDistance: 5000
  },
  {
    id: 'fgbb34sdf76',
    make: 'Canon',
    model: 'EOS 1100D',
    minLumens: 201,
    maxLumens: 300,
    minDistance: 5001,
    maxDistance: 10000
  },
  {
    id: 'sdv134kjkuy',
    make: 'Nikon',
    model: 'D500',
    minLumens: 201,
    maxLumens: 400,
    minDistance: 5001,
    maxDistance: 10000
  },
  {
    id: 'zktv5vds7',
    make: 'Sony',
    model: 'DSLR-A230',
    minLumens: 300,
    maxLumens: 400,
    minDistance: 5001,
    maxDistance: 20000
  },
  {
    id: 'aghiqw5462',
    make: 'Sony',
    model: 'DSLR-A290',
    minLumens: 401,
    maxLumens: 500,
    minDistance: 10001,
    maxDistance: 15000
  },
  {
    id: 'mngtsdf45',
    make: 'GoPro',
    model: 'Hero 9',
    minLumens: 501,
    maxLumens: 600,
    minDistance: 15001,
    maxDistance: 20000
  },
];