import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexStroke,
  ApexTooltip,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexLegend,
  ApexFill,
} from 'ng-apexcharts';

export type barChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    responsive: ApexResponsive[];
    xaxis: ApexXAxis;
    legend: ApexLegend;
    fill: ApexFill;
  };
  
  export type areaChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    stroke: ApexStroke;
    tooltip: ApexTooltip;
    dataLabels: ApexDataLabels;
    legend: ApexLegend;
    colors: string[];
  };
  
export interface TicketElement {
    id: number;
    creator: string;
    title: string;
    assignee: string;
    status: string;
    labelbg: string;
    product: string;
    date: string;
    taskSteps?:any[]
}

export interface Hero {
    id: number;
    name: string;
  }

const tickets: TicketElement[] = [
    {
        id: 77,
        creator: 'Eric Pratt',
        title: ' File upload ,Elegant Theme Side Menu show OnClick',
        assignee: 'Alice Bohr',
        status: 'In Progress',
        labelbg: 'warning',
        product: 'Elegant Admin',
        date: '2018-05-01',
        taskSteps:[{
            type: "file",
            steps: 3
        }]
       
    },
    {
        id: 78,
        creator: 'Steve',
        title: 'Xtreme theme dropdown issue',
        assignee: 'Jonathan',
        status: 'Open',
        labelbg: 'success',
        product: 'Xtreme Admin',
        date: '2018-05-03'
    },
    {
        id: 79,
        creator: 'Mark',
        title: 'Header issue in material admin',
        assignee: 'Smith J',
        status: 'Closed',
        labelbg: 'danger',
        product: 'Material Admin',
        date: '2018-05-02',
        taskSteps:[{
            type: "file",
            steps: 3
        }]
    },
    {
        id: 80,
        creator: 'John Doe',
        title: 'Sidebar issue in Nice admin',
        assignee: 'Vincent',
        status: 'In Progress',
        labelbg: 'warning',
        product: 'Nice Admin',
        date: '2018-05-06',
        taskSteps:[{
            type: "file",
            steps: 3
        }]
    },
    {
        id: 81,
        creator: 'Jennifer',
        title: 'Elegant Theme Side Menu show OnClick',
        assignee: 'Chris Martin',
        status: 'Open',
        labelbg: 'success',
        product: 'Elagant Admin',
        date: '2018-05-04',
        taskSteps:[{
            type: "file",
            steps: 3
        }]
    },
    {
        id: 82,
        creator: 'Harper',
        title: 'Header issue in admin pro admin',
        assignee: 'James F',
        status: 'Closed',
        labelbg: 'danger',
        product: 'Adminpro Admin',
        date: '2018-05-03',
        taskSteps:[{
            type: "file",
            steps: 3
        }]
    },
    {
        id: 83,
        creator: 'Billy John',
        title: 'Elegant Theme Side Menu OnClick',
        assignee: 'Jonathan',
        status: 'In Progress',
        labelbg: 'warning',
        product: 'Elegant Admin',
        date: '2018-05-05',
        taskSteps:[{
            type: "file",
            steps: 3
        }]
    },
    {
        id: 84,
        creator: 'Allen Brook',
        title: 'adminpress Theme Side Menu not opening',
        assignee: 'Smith J',
        status: 'Open',
        labelbg: 'success',
        product: 'Adminpress Admin',
        date: '2018-05-04',
        taskSteps:[{
            type: "file",
            steps: 3
        }]
    },
    {
        id: 85,
        creator: 'Olivia Hart',
        title: 'Charts not proper in xtreme admin',
        assignee: 'Markus',
        status: 'Closed',
        labelbg: 'danger',
        product: 'Xtreme Admin',
        date: '2018-05-02',
        taskSteps:[{
            type: "file",
            steps: 3
        }]
    },
    {
        id: 86,
        creator: 'Luis Orys',
        title: 'Psd not availabel with package',
        assignee: 'Jane',
        status: 'Closed',
        labelbg: 'danger',
        product: 'Material Admin',
        date: '2018-05-03',
        taskSteps:[{
            type: "file",
            steps: 3
        }]
    }
];
@Component({
    templateUrl: './tasklist.component.html'
})

export class TasklistComponent implements OnInit {
    @ViewChild('chart') chart: ChartComponent;
    public barChartOptions: Partial<barChartOptions>;
    public areaChartOptions: Partial<areaChartOptions>;
    constructor() {}
  
    // Doughnut chart start
    public doughnutChartLabels: string[] = [
      'Development',
      'Java Classes',
      'Painting ',
      'Geography Class',
    ];
    public doughnutChartData: number[] = [32, 25, 20, 23];
    public doughnutChartColors: any[] = [
      {
        backgroundColor: ['#5A5FAF', '#F7BF31', '#EA6E6C', '#28BDB8'],
      },
    ];
  
    public doughnutChartType = 'doughnut';
    public doughnutChartOptions: any = {
      animation: false,
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 70,
      legend: {
        display: false,
      },
    };
  
    // Doughnut chart end
  
    ngOnInit() {
      this.chart1();
      this.chart2();
    }
  
    private chart1() {
      this.areaChartOptions = {
        series: [
          {
            name: 'Mathes',
            data: [31, 40, 28, 51, 42, 85, 77],
          },
          {
            name: 'Science',
            data: [11, 32, 45, 32, 34, 52, 41],
          },
        ],
        chart: {
          height: 350,
          type: 'area',
          toolbar: {
            show: false,
          },
          foreColor: '#9aa0ac',
        },
        colors: ['#F77A9A', '#A054F7'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          categories: [
            'test 1',
            'test 2',
            'test 3',
            'test 4',
            'test 5',
            'test 6',
            'test 7',
          ],
        },
        legend: {
          show: true,
          position: 'top',
          horizontalAlign: 'center',
          offsetX: 0,
          offsetY: 0,
        },
      };
    }
  
    private chart2() {
      this.barChartOptions = {
        series: [
          {
            name: 'Physics',
            data: [44, 55, 41, 67, 22, 43],
          },
          {
            name: 'Computer',
            data: [13, 23, 20, 8, 13, 27],
          },
          {
            name: 'Management',
            data: [11, 17, 15, 15, 21, 14],
          },
          {
            name: 'Mathes',
            data: [21, 7, 25, 13, 22, 8],
          },
        ],
        chart: {
          type: 'bar',
          height: 330,
          foreColor: '#9aa0ac',
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '20%',
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          type: 'category',
          categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        },
        legend: {
          show: false,
        },
        fill: {
          opacity: 1,
          colors: ['#25B9C1', '#4B4BCB', '#EA9022', '#9E9E9E'],
        },
      };
    }
  }
  
