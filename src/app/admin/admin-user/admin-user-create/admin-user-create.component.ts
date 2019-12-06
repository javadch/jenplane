import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AlertsService } from 'angular-alert-module';

import { ApiService } from '../../../_services/api.service';

@Component({
    selector: 'app-admin-user-create',
    templateUrl: './admin-user-create.component.html',
    styleUrls: ['./admin-user-create.component.css']
})
export class AdminUserCreateComponent implements OnInit {

    thisForm: FormGroup;
    
    constructor(private alerts: AlertsService, private route: ActivatedRoute, private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }
    
    ngOnInit() {
        this.thisForm = this.formBuilder.group({
            'blocked': [null],
            'approved': [null],
            'password': [null, [Validators.required, Validators.minLength(6)]],
            'firstname': [null, Validators.maxLength(50)],
            'lastname' : [null, Validators.maxLength(50)],
            'email' : [null, [Validators.required, Validators.email, Validators.maxLength(256)]]
        });
    }
    get f() { return this.thisForm.controls; }

    onFormSubmit(form:NgForm) {
        this.api.postUser(form).subscribe(resp => {
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
            }
            
            this.router.navigate(['/admin/users']);
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
