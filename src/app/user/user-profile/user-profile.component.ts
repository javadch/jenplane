import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

import { ApiService } from '../../_services/api.service';
import { AlertsService } from 'angular-alert-module';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

	thisForm: FormGroup;

	data = [];

	constructor(private router: Router, private route: ActivatedRoute,
		private api: ApiService, private formBuilder: FormBuilder,
		public dialog: MatDialog, private alerts: AlertsService) { }

	ngOnInit() {
		// Create form
		this.thisForm = this.formBuilder.group({
			'firstname': [null, Validators.maxLength(50)],
			'lastname' : [null, Validators.maxLength(50)],
            'password': [null]
		});
		
		// Update the form values
		this.api.getLoggedInUser().subscribe(resp => {

            // Errors
            if ( resp['success'] === undefined || resp['success'] == false ){
                this.alerts.setMessage(resp['msg'], 'error');
                this.router.navigate(['/dashboard']);
            }
            else if ( resp['data'] === undefined || !Object.keys(resp['data']).length ){
                this.alerts.setMessage('Error fetching data', 'error');
                this.router.navigate(['/dashboard']);
            }

            else{
	            // Save the data locally
	            this.data = resp['data'];

				this.thisForm.setValue({
					firstname: (resp['data'].firstname !== undefined && resp['data'].firstname) ? resp['data'].firstname : false,
					lastname: (resp['data'].lastname !== undefined && resp['data'].lastname) ? resp['data'].lastname : '',
	                password: ''
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
		this.api.putLoggedInUser(form)
		.subscribe(resp => {
			
            // Ok
            if (resp['success'] !== undefined && resp['success'] == true){
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
		err =>{
		    if(err['status'] == 401) {
		        localStorage.clear();
		        this.router.navigate(['/user/login']);
		    }
		}
		);
	}
}