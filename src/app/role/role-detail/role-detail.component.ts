import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {Observable,of, from } from 'rxjs';

import { ApiService } from '../../_services/api.service';
import { DialogDeleteComponent } from '../../_dialogs/dialog-delete.component';
import { AlertsService } from 'angular-alert-module';

import { RoleDataService } from '../role-data.service';

@Component({
    selector: 'app-role-detail',
    templateUrl: './role-detail.component.html',
    styleUrls: ['./role-detail.component.css']
})
export class RoleDetailComponent implements OnInit {

    thisForm: FormGroup;
    data = [];

    // will contain all allowed user roles
    allowedRoles = [];

    // Variables to host data about the queried model in the URL
    roleModel : any = '';
    roleModelType : string = '';
    roleModelId : string = '';
    
    constructor(private roleDataService: RoleDataService, private router: Router,
        private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder,
        public dialog: MatDialog, private alerts: AlertsService) {

        this.route.url.subscribe(params => {
            // Is it an organization or a project
            // Read from the url parameter
            this.roleModelType = params[1].path;
            this.roleModelId = params[2].path;
        })
    }
    
    ngOnInit() {
        // Create form
        this.thisForm = this.formBuilder.group({
            'role': [null, [Validators.required]]
        });

        // Get the allowed user roles
        this.roleDataService.getAllowedRoles().subscribe(resp => {
            this.allowedRoles = resp;
        },
        err =>{
            if(err['status'] == 401) {
                localStorage.clear();
                this.router.navigate(['/user/login']);
            }
        }
        );

        // Get data of the queried user's role
        this.getData(this.route.snapshot.params['id']);

        /////////////
        // Get the queried project
        /////////////
        if (this.roleModelType == 'project'){
            this.api.getProject(this.roleModelId).subscribe(resp => {

                // Errors
                if ( resp['success'] === undefined || resp['success'] == false ){
                    this.alerts.setMessage(resp['msg'], 'error');
                    this.router.navigate(['/roles/' + this.roleModelType + '/' + this.roleModelId]);
                }
                else if ( resp['data'] === undefined || !Object.keys(resp['data']).length ){
                    this.alerts.setMessage('Error fetching data', 'error');
                    this.router.navigate(['/roles/' + this.roleModelType + '/' + this.roleModelId]);
                }

                else{
                    // Save the data locally
                    this.roleModel = resp['data'];
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

        // Get the queried organization
        else if (this.roleModelType == 'org') {
            this.api.getOrganization(this.roleModelId).subscribe(resp => {

                // Errors
                if ( resp['success'] === undefined || resp['success'] == false ){
                    this.alerts.setMessage(resp['msg'], 'error');
                    this.router.navigate(['/roles/' + this.roleModelType + '/' + this.roleModelId]);
                }
                else if ( resp['data'] === undefined || !Object.keys(resp['data']).length ){
                    this.alerts.setMessage('Error fetching data', 'error');
                    this.router.navigate(['/roles/' + this.roleModelType + '/' + this.roleModelId]);
                }

                else{
                    // Save the data locally
                    this.roleModel = resp['data'];
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
    get f() { return this.thisForm.controls; }
    
    // Get data via API
    getData(id) {
        this.api.getUserRole(id, this.roleModelType, this.roleModelId).subscribe(resp => {

            // Errors
            if ( resp['success'] === undefined || resp['success'] == false ){
                this.alerts.setMessage(resp['msg'], 'error');
                this.router.navigate(['/roles/' + this.roleModelType + '/' + this.roleModelId]);
            }
            else if ( resp['data'] === undefined || !Object.keys(resp['data']).length ){
                this.alerts.setMessage('Error fetching data', 'error');
                this.router.navigate(['/roles/' + this.roleModelType + '/' + this.roleModelId]);
            }

            else{
                // Save a copy of the data to be used locally
                this.data = resp['data'];
                
                // Update the form values
                this.thisForm.setValue({
                    role: (resp['data'].role !== undefined && resp['data'].role) ? resp['data'].role : 'member'
                });
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
    
    // Form submit
    onFormSubmit(form:NgForm) {

        // Update via API
        this.api.putUserRole(this.route.snapshot.params['id'],  this.roleModelType, this.roleModelId, form)
        .subscribe(resp => {

            // Ok
            if (resp['success'] !== undefined && resp['success'] == true){
                this.alerts.setMessage(resp['msg'], 'success');
            }

            // Error
            else{
                this.alerts.setMessage(resp['msg'], 'error');
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
    
    // Delete entry
    deleteEntry() {
        const dialogRef = this.dialog.open(DialogDeleteComponent);
        
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined && result == true ){

                // Call the API to delete the role
                this.api.deleteUserRole(this.data['_id'], this.roleModelType, this.roleModelId)
                .subscribe(resp => {

                    // Success
                    if (resp['success'] !== undefined && resp['success'] == true){
                        this.alerts.setMessage(resp['msg'], 'success');
                        this.router.navigate(['/roles/' + this.roleModelType + '/' + this.roleModelId]);
                    }

                    // Error
                    else{
                        this.alerts.setMessage(resp['msg'], 'error');
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
        });
    }
}
