import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { AlertsService } from 'angular-alert-module';
import { ApiService } from '../../_services/api.service';

@Component({
    selector: 'app-resource-create',
    templateUrl: './resource-create.component.html',
    styleUrls: ['./resource-create.component.css']
})
export class ResourceCreateComponent implements OnInit {
    thisForm: FormGroup;

    // The project
    projectData : any = '';
    projectId : string = '';
    
    constructor(private router: Router, private route: ActivatedRoute,
        private api: ApiService, private formBuilder: FormBuilder,
        private alerts: AlertsService) {

        // Project ID from the URL Params
        this.projectId = route.snapshot.params.projectId;
    }
    
    ngOnInit() {
        // Create form
        this.thisForm = this.formBuilder.group({
            'shortname' : [null, [Validators.required, Validators.maxLength(20)]],
            'fullname' : [null, [Validators.required, Validators.maxLength(256)]],
            'description' : [null, Validators.maxLength(500)]
        });

        // Validate the project
        this.api.getProject(this.projectId).subscribe(resp => {
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
                // Save the project data locally
                this.projectData = resp['data'];
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
        this.api.postResource(this.projectId, form).subscribe(resp => {

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
            
            this.router.navigate(['/resources/project/' + this.projectId]);
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
