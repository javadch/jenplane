import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ApiService } from '../../../_services/api.service';
import { DialogDeleteComponent } from '../../../_dialogs/dialog-delete.component';
import { AlertsService } from 'angular-alert-module';

@Component({
    selector: 'app-admin-user-detail',
    templateUrl: './admin-user-detail.component.html',
    styleUrls: ['./admin-user-detail.component.css']
})
export class AdminUserDetailComponent implements OnInit {

    thisForm: FormGroup;
    data:any = [];

    currentPassword : string = '';
    
    constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder, public dialog: MatDialog, private alerts: AlertsService) { }
    
    ngOnInit() {
        // Create form
        this.thisForm = this.formBuilder.group({
            'blocked': [null],
            'approved': [null],
            'firstname': [null, Validators.maxLength(50)],
            'lastname' : [null, Validators.maxLength(50)],
            'email' : [null, [Validators.required, Validators.email, Validators.maxLength(256)]],
            'password': [null]
        });

        // Get data
        this.getData(this.route.snapshot.params['id']);
    }
    get f() { return this.thisForm.controls; }
    
    // Get data via API
    getData(id) {
        this.api.getUser(id).subscribe(resp => {

            // Error
            if (resp['success'] !== undefined && resp['success'] == false){
                this.alerts.setMessage(resp['msg'], 'error');
                this.router.navigate(['/admin/users']);
            }
            // Error
            if (resp['data'] == undefined || !Object.keys(resp['data']).length ){
                this.alerts.setMessage('Error fetching data', 'error');
                this.router.navigate(['/admin/users']);
            }

            // Save a copy of the data to be used locally
            this.data = resp['data'];

            // Save a copy of the current password
            this.currentPassword = resp['data'].password;
            
            // Update the form values
            this.thisForm.setValue({
                blocked: (resp['data'].blocked !== undefined && resp['data'].blocked) ? resp['data'].blocked : false,
                approved: (resp['data'].approved !== undefined && resp['data'].approved) ? resp['data'].approved : false,
                firstname: (resp['data'].firstname !== undefined && resp['data'].firstname) ? resp['data'].firstname : false,
                lastname: (resp['data'].lastname !== undefined && resp['data'].lastname) ? resp['data'].lastname : '',
                email: (resp['data'].email !== undefined && resp['data'].email) ? resp['data'].email : '',
                password: ''
            });
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

        // Update user via API
        this.api.putUser(this.data['_id'], form).subscribe(resp => {

            // Ok
            if (resp['success'] !== undefined && resp['success'] == true) {
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
                else{
                    this.alerts.setMessage('Error', 'error');
                }
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

                // Call the API to delete the user
                this.api.deleteUser(this.data['_id'])
                .subscribe(resp => {
                    
                    // Success
                    if (resp['success'] !== undefined && resp['success'] == true){
                        this.alerts.setMessage(resp['msg'], 'success');
                        this.router.navigate(['/admin/users']);
                    }

                    // Error
                    else
                        this.alerts.setMessage(resp['msg'], 'error');
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
