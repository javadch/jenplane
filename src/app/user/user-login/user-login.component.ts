import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { ApiService } from '../../_services/api.service';
import { AlertsService } from 'angular-alert-module';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

    thisForm: FormGroup;
    
    constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder, private alerts: AlertsService) { }
    
    ngOnInit() {
        // Create form
        this.thisForm = this.formBuilder.group({
            'email' : [null, [Validators.required, Validators.email]],
            'password' : [null, Validators.required]
        });
    }
    get f() { return this.thisForm.controls; }
    
    // Form submit
    onFormSubmit(form:NgForm) {
        this.api.loginUser(form).subscribe(resp => {

            let msg_status = ( resp['success'] !== undefined && resp['success'] == true ) ? 'success' : 'error';
            if ( resp['success'] !== undefined && resp['success'] == true
                && resp['token'] !== undefined && resp['token']) {

                localStorage.setItem('jwtToken', 'JWT ' + resp['token']);
                
                // Proceed to the main landing page for authorized users
                this.router.navigate(['/dashboard']);
            }
            
            // Set alert message
            this.alerts.setMessage(resp['msg'], msg_status);
            
        }, err => {}
        );
    }
}