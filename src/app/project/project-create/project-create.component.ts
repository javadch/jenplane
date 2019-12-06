import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { AlertsService } from 'angular-alert-module';
import { ApiService } from '../../_services/api.service';

@Component({
    selector: 'app-project-create',
    templateUrl: './project-create.component.html',
    styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {
    thisForm: FormGroup;

    // The organization
    orgData : any = '';
    orgId : string = '';
    
    constructor(private router: Router, private route: ActivatedRoute,
        private api: ApiService, private formBuilder: FormBuilder,
        private alerts: AlertsService) {

        // Organization ID from the URL Params
        this.orgId = route.snapshot.params.orgId;
    }
    
    ngOnInit() {
        // Create form
        this.thisForm = this.formBuilder.group({
            'shortname' : [null, [Validators.required, Validators.maxLength(20)]],
            'fullname' : [null, [Validators.required, Validators.maxLength(256)]],
            'description' : [null, Validators.maxLength(500)]
        });

        // Validate the organization
        this.api.getOrganization(this.orgId).subscribe(resp => {
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
                // Save the organization data locally
                this.orgData = resp['data'];
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
    
    onFormSubmit(form:NgForm) {
        this.api.postProject(this.orgId, form).subscribe(resp => {

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
                    var errorField = ';'
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
            
            this.router.navigate(['/projects/org/' + this.orgId]);
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
