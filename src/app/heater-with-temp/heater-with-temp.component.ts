import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'heater-with-temp',
  templateUrl: './heater-with-temp.component.html',
  styleUrls: ['./heater-with-temp.component.css']
})
export class HeaterWithTempComponent implements OnChanges {
  @Input('min-temp') minTemp: number = 0;
  @Input('max-temp') maxTemp: number = 0;
  @Input('target-temp') targetTemp: number = 0;

  heaterNeedleAngle = 0;
  heaterDiameter = 200;//px
  heaterNeedleWidth = 2;
  heaterRadius = (this.heaterDiameter / 2);
  heaterRadiusOffset = this.heaterNeedleWidth * 2;
  // subtract the needleWidth or the circle will overflow the SVG wrapper 

  lengthOfLineOutsideOfCircle = this.heaterRadius + this.heaterRadiusOffset - (this.heaterRadius / Math.sqrt(2));

  ngOnChanges(): void {
    if (this.minTemp > this.maxTemp || this.maxTemp < this.minTemp) {
      throw new Error('The maximum temperature cannot be less than the minimum temperature, or vice versa');
    }

    if (this.targetTemp > this.maxTemp || this.targetTemp < this.minTemp) {
      throw new Error('The target temperature cannot be less than the minimum temperature or more than the maximum temperature.');
    }

    this.heaterNeedleAngle = this.targetTemp / (this.maxTemp - this.minTemp) * 270;
  }
}


  /*
  diameterOfRect = (this.heaterRadius + this.heaterRadiusOffset) * Math.sqrt(2);
  diameterOfSmallerRect = this.diameterOfRect - this.heaterRadius;
  lengthOfLineOutsideOfCircle = this.heaterRadius + Math.sqrt(2) - (this.heaterRadius / Math.sqrt(2));
  */
