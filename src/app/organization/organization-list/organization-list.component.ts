import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ApiService } from '../../_services/api.service';

@Component({
    selector: 'app-organization-list',
    templateUrl: './organization-list.component.html',
    styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {
    // Columns to display
    displayedColumns = [
    'edit',
    'editMembers',
    'editProjects',
    'locked',
    'shortname',
    'fullname'
    ];

    // Source for the table data
    dataSource = new MatTableDataSource<Element>();
    @ViewChild(MatSort) sort: MatSort;

    constructor(private api: ApiService, private router : Router) { }
    
    ngOnInit() {
        // Provide sorting to the data source
        this.dataSource.sort = this.sort;

        // Get the data
        this.api.getOrganizations().subscribe(resp => {
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
}