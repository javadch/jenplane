import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlertsService } from 'angular-alert-module';

import { ApiService } from '../../_services/api.service';
import { MustMatch } from '../../_helpers/must-match.validator';

@Component({
    selector: 'app-user-register',
    templateUrl: './user-register.component.html',
    styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

    thisForm: FormGroup;
    
    constructor(private alerts: AlertsService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private api: ApiService) { }
    
    ngOnInit() {
        this.thisForm = this.formBuilder.group({
            'firstname': [null, [Validators.required, Validators.maxLength(50)]],
            'lastname': [null, [Validators.required, Validators.maxLength(50)]],
            'email': [null, [Validators.required, Validators.email, Validators.maxLength(256)]],
            'password': [null, [Validators.required, Validators.minLength(6)]],
            'confirmPassword': [null, Validators.required]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }
    
    get f() { return this.thisForm.controls; }
    
    onFormSubmit(form:NgForm) {
        this.api.registerUser(form).subscribe(resp => {
            if (resp['success'] !== undefined && resp['success'] == true){
                this.router.navigate(['/user/login']);
            }
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