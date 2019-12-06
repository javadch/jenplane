import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AlertsService } from 'angular-alert-module';

import { ApiService } from '../../../_services/api.service';

@Component({
    selector: 'app-admin-organization-create',
    templateUrl: './admin-organization-create.component.html',
    styleUrls: ['./admin-organization-create.component.css']
})
export class AdminOrganizationCreateComponent implements OnInit {

    thisForm: FormGroup;
    
    constructor(private alerts: AlertsService, private route: ActivatedRoute, private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }
    
    ngOnInit() {
        this.thisForm = this.formBuilder.group({
            'locked': [false],
            'shortname' : [null, [Validators.required, Validators.maxLength(20)]],
            'fullname' : [null, [Validators.required, Validators.maxLength(256)]],
            'email' : [null, [Validators.required, Validators.email, Validators.maxLength(256)]],
            'description' : [null, Validators.maxLength(500)],
            'address' : [null, Validators.maxLength(500)],
            'phone' : [null, Validators.maxLength(50)],
            'country' : [null, Validators.maxLength(50)]
        });
    }
    get f() { return this.thisForm.controls; }

    onFormSubmit(form:NgForm) {

        this.api.postOrganization(form).subscribe(resp => {

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
            
            this.router.navigate(['/organizations']);
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
