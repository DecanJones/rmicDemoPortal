import { Component, OnInit, Inject, Optional, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as $ from 'jquery';
import { SharedService } from '../shared-services';

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

const tickets: TicketElement[] = [
    {
        id: 77,
        creator: 'Eric Pratt',
        title: 'Elegant Theme Side Menu show OnClick',
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

    @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);
    searchText: any;
    totalCount = -1;
    Closed = -1;
    Inprogress = -1;
    Open = -1;
    sideBarOPen:boolean = false;
    displayedColumns: string[] = ['creator', 'title', 'assignee', 'status', 'product', 'date', 'action'];
    workflow:any[] = [ {
        workflow: "workflow #1",
        style: "bg-info",
        taskSteps:["file upload", "project description", "additional comments"]
    },
    {
        workflow: "workflow #2",
        style: "bg-warning",
        taskSteps:["file upload", "project description", "additional comments"]
    },{
        workflow: "workflow #3",
        style: "bg-success",
        taskSteps:["project description", "additional comments"]
    },
    {
        workflow: "workflow #4",
        style: "bg-danger",
        taskSteps:["file upload"]
    }
]
    dataSource = new MatTableDataSource(tickets);


    constructor(public dialog: MatDialog,private sharedService:SharedService) { }

    ngOnInit() {
        this.totalCount = this.dataSource.data.length;
        document.getElementById("navMenu")?.click()
        this.Open = this.btnCategoryClick('Open',1);
        this.Closed = this.btnCategoryClick('Closed',2);
        this.Inprogress = this.btnCategoryClick('In Progress',3);
        this.dataSource = new MatTableDataSource(tickets);
        
    }

    clickMe(any:any,num:number){
       
        this.sharedService.emitChangeWorkflow(this.workflow[num])    
        switch (any) {
            case 'Open':
                this.sharedService.emitChange(this.workflow[0].taskSteps)
              break;
            case 'In Progress':
                this.sharedService.emitChange(this.workflow[1].taskSteps)
              break;
            case 'Closed':
                this.sharedService.emitChange(this.workflow[2].taskSteps)
                break;
            default:
                this.sharedService.emitChange(this.workflow[3].taskSteps)
                break;
                   
               
          }
          
    }
    
    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    btnCategoryClick(val: string, num:number) {
        this.dataSource.filter = val.trim().toLowerCase();
       this.clickMe(val, num);
        return this.dataSource.filteredData.length;
        
    }

    openDialog(action: string, obj: any) {
        obj.action = action;
        const dialogRef = this.dialog.open(TicketDialogContent, {
            data: obj
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result.event === 'Add') {
                this.addRowData(result.data);
            } else if (result.event === 'Update') {
                this.updateRowData(result.data);
            } else if (result.event === 'Delete') {
                this.deleteRowData(result.data);
            }
        });
    }

    addRowData(row_obj: TicketElement) {
        const d = new Date();
        this.dataSource.data.push({
            id: d.getTime(),
            creator: row_obj.creator,
            title: row_obj.title,
            assignee: row_obj.assignee,
            status: row_obj.status,
            labelbg: row_obj.labelbg,
            product: row_obj.product,
            date: row_obj.date,
        });
        this.table.renderRows();

    }

    updateRowData(row_obj: TicketElement) {
        this.dataSource.data = this.dataSource.data.filter((value, key) => {
            if (value.id === row_obj.id) {
                value.creator = row_obj.creator;
                value.title = row_obj.title;
                value.assignee = row_obj.assignee;
                value.status = row_obj.status;
                value.labelbg = row_obj.labelbg;
                value.product = row_obj.product;
                value.date = row_obj.date;
            }
            return true;
        });
    }

    deleteRowData(row_obj: TicketElement) {
        this.dataSource.data = this.dataSource.data.filter((value, key) => {
            return value.id !== row_obj.id;
        });
    }


}

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'dialog-content',
    templateUrl: 'dialog-content.html',
})
// tslint:disable-next-line: component-class-suffix
export class TicketDialogContent {
    action: string;
    local_data: any;

    constructor(
        public dialogRef: MatDialogRef<TicketDialogContent>,
        // @Optional() is used to prevent error if no data is passed
        @Optional() @Inject(MAT_DIALOG_DATA) public data: TicketElement) {
        //  console.log(data);
        this.local_data = { ...data };
        this.action = this.local_data.action;
    }

    doAction() {
        this.dialogRef.close({ event: this.action, data: this.local_data });
    }

    closeDialog() {
        this.dialogRef.close({ event: 'Cancel' });
    }

}
