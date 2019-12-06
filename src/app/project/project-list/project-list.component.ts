import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AlertsService } from 'angular-alert-module';

import { ApiService } from '../../_services/api.service';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
    // Columns to display
    displayedColumns = [
    'edit',
    'editMembers',
    'editResources',
    'locked',
    'shortname',
    'fullname'
    ];

    // The organization
    orgData : any = '';
    orgId : string = '';

    dataSource = new MatTableDataSource<Element>();
    @ViewChild(MatSort) sort: MatSort;
    
    constructor(private api: ApiService, private route: ActivatedRoute,
        private router: Router, private alerts: AlertsService) {
        
        // Organization ID from the URL Params
        this.orgId = route.snapshot.params.orgId;
    }
    
    ngOnInit() {
        // Provide sorting to the data source
        this.dataSource.sort = this.sort;

        // Get the organization
        this.api.getOrganization(this.orgId).subscribe(resp => {

            if ( resp['success'] === undefined || resp['success'] == false ){
                this.alerts.setMessage(resp['msg'], 'error');
                this.router.navigate(['/organizations']);
            }
            else if ( resp['data'] === undefined || !Object.keys(resp['data']).length ){
                this.alerts.setMessage('Error fetching data', 'error');
                this.router.navigate(['/organizations']);
            }

            else{
                // Save the organization locally
                this.orgData = resp['data'];

                // Get the organization's projects
                this.api.getProjects(this.orgId).subscribe(resp => {

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