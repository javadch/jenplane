import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AlertsService } from 'angular-alert-module';

import { ApiService } from '../../_services/api.service';

@Component({
    selector: 'app-role-list',
    templateUrl: './role-list.component.html',
    styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
    // Columns to display
    displayedColumns = [
    'edit',
    'role',
    'user'
    ];

    // Variables to host data about the queried model in the URL
    roleModel : any = '';
    roleModelType : string = '';
    roleModelId : string = '';

    // Source for the table data
    dataSource = new MatTableDataSource<Element>();
    @ViewChild(MatSort) sort: MatSort;

    constructor(private api: ApiService, private route: ActivatedRoute, private router: Router, private alerts: AlertsService) {
        
        // Check which model (organization, project) we are creating for
        this.roleModelId = route.snapshot.params.id;
        this.route.url.subscribe(params => {
            // Is it an organization or a project
            // Read from the url parameter
            this.roleModelType = params[0].path;
        })
    }
    
    ngOnInit() {

        // Provide sorting to the data source
        this.dataSource.sort = this.sort;

        // Get the data
        this.api.getUserRoles(this.roleModelType, this.roleModelId).subscribe(resp => {
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

        /////////////
        // Get the queried project
        if (this.roleModelType == 'project'){
            this.api.getProject(this.roleModelId).subscribe(resp => {

                // Errors
                if ( resp['success'] === undefined || resp['success'] == false ){
                    this.alerts.setMessage(resp['msg'], 'error');
                    this.router.navigate(['/projects']);
                }
                else if ( resp['data'] === undefined || !Object.keys(resp['data']).length ){
                    this.alerts.setMessage('Error fetching data', 'error');
                    this.router.navigate(['/projects']);
                }

                else{
                    // Save the data locally
                    this.roleModel = resp['data'];
                }
            },
            err => {
                if(err['status'] == 401) {
                    localStorage.clear();
                    this.router.navigate(['/user/login']);
                }

                // any other error
                this.alerts.setMessage('Invalid project', 'error');
                this.router.navigate(['/projects']);
            }
            );
        }

        // Get the queried organization
        else if (this.roleModelType == 'org') {
            this.api.getOrganization(this.roleModelId).subscribe(resp => {

                // Errors
                if ( resp['success'] === undefined || resp['success'] == false ){
                    this.alerts.setMessage(resp['msg'], 'error');
                    this.router.navigate(['/organizations']);
                }
                else if ( resp['data'] === undefined || !Object.keys(resp['data']).length ){
                    this.alerts.setMessage('Error fetching data', 'error');
                    this.router.navigate(['/organizations']);
                }

                else{
                    // Save the data locally
                    this.roleModel = resp['data'];
                }
            },
            err => {
                if(err['status'] == 401) {
                    localStorage.clear();
                    this.router.navigate(['/user/login']);
                }

                // any other error
                this.alerts.setMessage('Invalid organization', 'error');
                this.router.navigate(['/organizations']);
            }
            );
        }
    }
}