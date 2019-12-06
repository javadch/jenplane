import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

import { ApiService } from '../../_services/api.service';
import { DialogDeleteComponent } from '../../_dialogs/dialog-delete.component';
import { AlertsService } from 'angular-alert-module';

@Component({
    selector: 'app-resource-detail',
    templateUrl: './resource-detail.component.html',
    styleUrls: ['./resource-detail.component.css']
})
export class ResourceDetailComponent implements OnInit {

    thisForm: FormGroup;
    resourceData = [];
    projectData = [];
    
    constructor(private router: Router, private route: ActivatedRoute,
        private api: ApiService, private formBuilder: FormBuilder,
        public dialog: MatDialog, private alerts: AlertsService) {
    }
    
    ngOnInit() {
        // Create form
        this.thisForm = this.formBuilder.group({
            'shortname' : [null, [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z0-9]*')]],
            'fullname' : [null, [Validators.required, Validators.maxLength(256)]],
            'description' : [null, Validators.maxLength(500)]
        });
        
        // Get resource data
        this.api.getResource(this.route.snapshot.params['id']).subscribe(resp => {

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
                this.resourceData = resp['data'];

                // Save the project locally
                this.projectData = resp['data']['project'];

                // Update the form values
                this.thisForm.setValue({
                    shortname: (resp['data'].shortname !== undefined && resp['data'].shortname) ? resp['data'].shortname : '',
                    fullname: (resp['data'].fullname !== undefined && resp['data'].fullname) ? resp['data'].fullname : '',
                    description: (resp['data'].description !== undefined && resp['data'].description) ? resp['data'].description : ''
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
    get f() { return this.thisForm.controls; }
    
    // Form submit
    onFormSubmit(form:NgForm) {
        // Update project via API
        this.api.putResource(this.resourceData['_id'], form).subscribe(resp => {

            // Ok
            if ( resp['success'] !== undefined && resp['success'] == true ){
                this.alerts.setMessage(resp['msg'],'success');
            }

            // Fail
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
        },
        err => {
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
            if (result != null && result == true ){

                this.api.deleteResource(this.resourceData['_id']).subscribe(resp => {
                    // Success
                    if ( resp['success'] !== undefined && resp['success'] == true ){
                        this.alerts.setMessage(resp['msg'], 'success');
                        this.router.navigate(['/resources/project/' + this.projectData['_id']]);
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