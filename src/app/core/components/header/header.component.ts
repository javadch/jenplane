import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../_services/auth.service';
    
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    
    hideMenu : boolean = false;
    isSuperAdmin : boolean = false;
    siteTitle : 'JenPlane';

    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}
    
    ngOnInit() {

    	// Hide menu for non-logged in users
    	if (!this.authService.isAuthenticated()){
    		this.hideMenu = true;
    	}
        // Show the admin link for the super admin
        if (this.authService.isSuperAdmin()){
            this.isSuperAdmin = true;
        }
    }
    
    logout(){
        this.authService.logout();
    }
}