import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ApiService } from '../../_services/api.service';
import { DialogDeleteComponent } from '../../_dialogs/dialog-delete.component';
import { AlertsService } from 'angular-alert-module';

@Component({
    selector: 'app-organization-detail',
    templateUrl: './organization-detail.component.html',
    styleUrls: ['./organization-detail.component.css']
})
export class OrganizationDetailComponent implements OnInit {

    thisForm: FormGroup;
    organizationData = [];
    organizationLocked = false;
    
    constructor(private router: Router, private route: ActivatedRoute,
        private api: ApiService, private formBuilder: FormBuilder,
        public dialog: MatDialog, private alerts: AlertsService) { }
    
    ngOnInit() {
        // Get data
        this.getData(this.route.snapshot.params['id']);
        
        // Create form
        this.thisForm = this.formBuilder.group({
            'shortname' : [null, [Validators.required, Validators.maxLength(20), Validators.pattern('[a-zA-Z0-9]*')]],
            'fullname' : [null, [Validators.required, Validators.maxLength(256)]],
            'email' : [null, [Validators.required, Validators.email, Validators.maxLength(256)]],
            'description' : [null, Validators.maxLength(500)],
            'address' : [null, Validators.maxLength(500)],
            'phone' : [null, Validators.maxLength(50)],
            'country' : [null, Validators.maxLength(50)]
        });
    }
    get f() { return this.thisForm.controls; }
    
    // Get data via API
    getData(id) {
        this.api.getOrganization(id).subscribe(resp => {
            
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
                // Save a copy of the data to be used locally
                this.organizationData = resp['data'];

                // Locked status
                this.organizationLocked = (resp['data'].locked != null && resp['data'].locked == true) ? true : false;
                
                // Update the form values
                this.thisForm.setValue({
                    shortname: (resp['data'].shortname != null && resp['data'].shortname) ? resp['data'].shortname : '',
                    fullname: (resp['data'].fullname != null && resp['data'].fullname) ? resp['data'].fullname : '',
                    email: (resp['data'].email != null && resp['data'].email) ? resp['data'].email : '',
                    description: (resp['data'].description != null && resp['data'].description) ? resp['data'].description : '',
                    address: (resp['data'].address != null && resp['data'].address) ? resp['data'].address : '',
                    phone: (resp['data'].phone != null && resp['data'].phone) ? resp['data'].phone : '',
                    country: (resp['data'].country != null && resp['data'].country) ? resp['data'].country : ''
                });
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
    
    // Form submit
    onFormSubmit(form:NgForm) {

        // Update via API
        this.api.putOrganization(this.organizationData['_id'], form).subscribe(resp => {

            // Ok
            if (resp['success'] !== undefined && resp['success'] == true){
                this.alerts.setMessage(resp['msg'], 'success');
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

    // Lock entry
    lockEntry() {
        const dialogRef = this.dialog.open(DialogDeleteComponent);
        
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined && result == true ){

                // Call the API to delete the organization and its projects
                this.api.lockOrganization(this.organizationData['_id'])
                .subscribe(resp => {

                    // Success
                    if (resp['success'] !== undefined && resp['success'] == true){
                        this.alerts.setMessage(resp['msg'], 'success');
                        this.router.navigate(['/organizations']);
                    }

                    // Error
                    else
                        this.alerts.setMessage(resp['msg'], 'error');
                    
                }, err => {
                    if(err['status'] == 401) {
                        this.router.navigate(['/user/login']);
                    }
                });
            }
        });
    }

    // Unlock entry
    unlockEntry() {
        const dialogRef = this.dialog.open(DialogDeleteComponent);
        
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined && result == true ){

                // Call the API to delete the organization and its projects
                this.api.unlockOrganization(this.organizationData['_id'])
                .subscribe(resp => {

                    // Success
                    if (resp['success'] !== undefined && resp['success'] == true){
                        this.alerts.setMessage(resp['msg'], 'success');
                        this.router.navigate(['/organizations']);
                    }

                    // Error
                    else
                        this.alerts.setMessage(resp['msg'], 'error');
                    
                }, err => {
                    if(err['status'] == 401) {
                        this.router.navigate(['/user/login']);
                    }
                });
            }
        });
    }
    
    // Delete entry
    deleteEntry() {
        const dialogRef = this.dialog.open(DialogDeleteComponent);
        
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined && result == true ){

                // Call the API to delete the organization and its projects
                this.api.deleteOrganization(this.organizationData['_id'])
                .subscribe(resp => {

                    // Success
                    if (resp['success'] !== undefined && resp['success'] == true){
                        this.alerts.setMessage(resp['msg'], 'success');
                        this.router.navigate(['/organizations']);
                    }

                    // Error
                    else
                        this.alerts.setMessage(resp['msg'], 'error');
                    
                }, err => {
                    if(err['status'] == 401) {
                        this.router.navigate(['/user/login']);
                    }
                });
            }
        });
    }
}