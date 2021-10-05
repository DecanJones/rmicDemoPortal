import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
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
    return {heroes};
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/