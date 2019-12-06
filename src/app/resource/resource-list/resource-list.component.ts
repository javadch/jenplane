import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AlertsService } from 'angular-alert-module';

import { ApiService } from '../../_services/api.service';

@Component({
    selector: 'app-resource-list',
    templateUrl: './resource-list.component.html',
    styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {
    // Columns to display
    displayedColumns = [
    'edit',
    'locked',
    'shortname',
    'fullname'
    ];

    // The project
    projectData : any = '';
    projectId : string = '';

    dataSource = new MatTableDataSource<Element>();
    @ViewChild(MatSort) sort: MatSort;
    
    constructor(private api: ApiService, private route: ActivatedRoute,
        private router: Router, private alerts: AlertsService) {
        
        // Project ID from the URL Params
        this.projectId = route.snapshot.params.projectId;
    }
    
    ngOnInit() {
        // Provide sorting to the data source
        this.dataSource.sort = this.sort;

        // Get the project
        this.api.getProject(this.projectId).subscribe(resp => {

            if ( resp['success'] === undefined || resp['success'] == false ){
                this.alerts.setMessage(resp['msg'], 'error');
                this.router.navigate(['/organizations']);
            }
            else if ( resp['data'] === undefined || !Object.keys(resp['data']).length ){
                this.alerts.setMessage('Error fetching data', 'error');
                this.router.navigate(['/organizations']);
            }

            else{
                // Save the project locally
                this.projectData = resp['data'];

                // Get the project's projects
                this.api.getResources(this.projectId).subscribe(resp => {

                    // Populate the data source
                    if ( resp['success'] !== undefined && resp['success'] == true
                        && resp['data'] !== undefined) {
                        this.dataSource.data = resp['data'];
                    }
                },
                err =>{
                    if(err['status'] == 401) {
                        localStorage.clear();
                        this.router.navigate(['/user/login']);
                    }
                }
                );
            }
        },
        err =>{
            if(err['status'] == 401) {
                localStorage.clear();
                this.router.navigate(['/user/login']);
            }
        }
        );
    }
}