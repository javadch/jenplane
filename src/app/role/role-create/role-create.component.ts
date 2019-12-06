import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AlertsService } from 'angular-alert-module';

import { ApiService } from '../../_services/api.service';

import { RoleDataService } from '../role-data.service';

@Component({
    selector: 'app-role-create',
    templateUrl: './role-create.component.html',
    styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {

    thisForm: FormGroup;

    // will contain all users data
    users:any = [];

    // will contain all allowed user roles
    allowedRoles = [];

    // Variables to host data about the queried model in the URL
    roleModel : any = '';
    roleModelType : string = '';
    roleModelId : string = '';
    
    constructor(private roleDataService: RoleDataService, private router: Router,
        private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder,
        private alerts: AlertsService) {

        // Check which model (organization, project) we are creating for
        this.route.url.subscribe(params => {
            // Is it an organization or a project
            // Read from the url parameter
            this.roleModelType = params[1].path;
            this.roleModelId = params[2].path;
        })
    }

    ngOnInit() {

        // Get the allowed user roles
        this.roleDataService.getAllowedRoles().subscribe(resp => {
            this.allowedRoles = resp;
        },
        err =>{
            if(err['status'] == 401) {
                localStorage.clear();
                this.router.navigate(['/user/login']);
            }}
        );

        this.thisForm = this.formBuilder.group({
            'user': [null, [Validators.required]],
            'role' : [null, [Validators.required]]
        });

        // Get the queried model from the URL
        // Creating a role for a user in either:
        // - an organization
        // - a project

        // Get the queried project
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
            err => {
                if(err['status'] == 401) {
                    localStorage.clear();
                    this.router.navigate(['/user/login']);
                }

                // else, some error
                this.alerts.setMessage('Error', 'error');
                this.router.navigate(['/roles/' + this.roleModelType + '/' + this.roleModelId]);
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
            err => {
                if(err['status'] == 401) {
                    localStorage.clear();
                    this.router.navigate(['/user/login']);
                }

                // any other error
                this.alerts.setMessage('Error', 'error');
                this.router.navigate(['/roles/' + this.roleModelType + '/' + this.roleModelId]);
            }
            );
        }

        // Get all users to populate the dropdown control for users
        this.api.getUsers().subscribe(resp => {

            // Errors
            if ( resp['success'] === undefined || resp['success'] == false ){
                this.alerts.setMessage(resp['msg'], 'error');
                this.router.navigate(['/roles/' + this.roleModelType + '/' + this.roleModelId]);
            }
            else if ( resp['data'] === undefined || !resp['data'].length ){
                this.alerts.setMessage('No valid users found', 'error');
                this.router.navigate(['/roles/' + this.roleModelType + '/' + this.roleModelId]);
            }

            else{
                // Save the data locally
                this.users = resp['data'];
            }
        },
        err =>{
            if(err['status'] == 401) {
                localStorage.clear();
                this.router.navigate(['/user/login']);
            }}
        );
    }
    get f() { return this.thisForm.controls; }

    onFormSubmit(form:NgForm) {
        this.api.postUserRole(this.roleModelType, this.roleModelId, form).subscribe(resp => {
            
            // Ok
            if (resp['success'] !== undefined && resp['success'] == true){
                this.alerts.setMessage(resp['msg'],'success');
            }

            // Error
            else{
                let error = ('error' in resp) ? resp['error'] : '';
                let errorMsg = ('msg' in resp) ? resp['msg'] : '';

                // Duplicate unique fields
                if ( error && error.code == 11000 ){
                    var errorField = '';
                    for (var fieldKey in error.field){
                        errorField = fieldKey;
                    }

                    this.alerts.setMessage('Field must be unique: ' + errorField, 'error');
                }

                // Error message is available
                else if ( errorMsg ){
                    this.alerts.setMessage(errorMsg, 'error');
                }
            }

            this.router.navigate(['/roles/' + this.roleModelType + '/' + this.roleModelId]);
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
