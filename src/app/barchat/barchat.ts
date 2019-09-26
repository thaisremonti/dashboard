import { Component, OnInit } from '@angular/core';
import { EstadoService } from '../services/estado.service';
import { Estado } from '../model/estado.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'barchart',
  templateUrl: './barchat.html'
})
export class BarChartComponent implements OnInit {
  constructor(private estadoService: EstadoService) { }
  private estados: Observable<Estado>;
  private esta: Estado;

  ngOnInit() {
    this.estados = this.estadoService.listaTodos();
  }

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public mbarChartLabels: string[] = ['AM', 'BA', 'CE', 'GO', 'MG', 'MS', 'MT', 'PE', 'PR', 'RS', 'SP', 'SVAN', 'SVRS', 'SVC-AN', 'SVC-RS'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(60,179,113)',
      borderColor: 'rgba(105,159,177,1)',
      pointBackgroundColor: 'rgba(105,159,177,1)',
      pointBorderColor: '#3CB371',
      pointHoverBackgroundColor: '#3CB371',
      pointHoverBorderColor: 'rgba(105,159,177)'
    },
    {
      backgroundColor: 'rgba(255,0,0)',
      borderColor: 'rgba(77,20,96,1)',
      pointBackgroundColor: 'rgba(77,20,96,1)',
      pointBorderColor: '#FF0000',
      pointHoverBackgroundColor: '#FF0000',
      pointHoverBorderColor: 'rgba(77,20,96,1)'
    },
    {
      backgroundColor: 'rgba(255,255,0)',
      borderColor: 'rgba(77,20,96,1)',
      pointBackgroundColor: 'rgba(77,20,96,1)',
      pointBorderColor: '#FFFF00',
      pointHoverBackgroundColor: '#FFFF00',
      pointHoverBorderColor: 'rgba(77,20,96,1)'
    }
  ];
  public barChartData: any[] = [
    { data: [15, 50, 10, 10, 10, 10, 70, 100, 10, 19, 150, 10, 49, 30, 75], label: 'Verde' },
    { data: [58, 55, 60, 79, 86, 57, 80, 100, 10, 19, 100, 10, 19, 35, 75], label: 'Vermelho' },
    { data: [58, 55, 60, 79, 66, 57, 10, 100, 10, 19, 100, 10, 19, 35, 75], label: 'Amarelo' }
  ];

    // events
    public chartClicked(e: any): void {
      console.log(e);
    }

    public chartHovered(e: any): void {
      console.log(e);
    }

  public randomize(): void {
    let data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      (Math.random() * 100),
      Math.round(Math.random() * 100),
      (Math.random() * 100),
      Math.round(Math.random() * 100)];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
}
