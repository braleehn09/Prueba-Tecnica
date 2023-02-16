import { Component } from '@angular/core';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent {
  matrixA = [[0, 0], [0, 0]];
  matrixB = [[0, 0], [0, 0]];
  resultMatrix: number[][] = [];

  addMatrices(): void {
    this.resultMatrix = [];
    for (let i = 0; i < this.matrixA.length; i++) {
      const row = [];
      for (let j = 0; j < this.matrixA[i].length; j++) {
        row.push(this.matrixA[i][j] + this.matrixB[i][j]);
      }
      this.resultMatrix.push(row);
    }
  }

  multiplyMatrices(): void {
    this.resultMatrix = [];
    for (let i = 0; i < this.matrixA.length; i++) {
      const row = [];
      for (let j = 0; j < this.matrixB[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < this.matrixA[i].length; k++) {
          sum += this.matrixA[i][k] * this.matrixB[k][j];
        }
        row.push(sum);
      }
      this.resultMatrix.push(row);
    }
  }
}