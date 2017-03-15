import { AuthService } from './../shared/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    needLogin: boolean;

    constructor(
        private route: ActivatedRoute,
        private authService: AuthService) {
    }


    ngOnInit() {
        this.route.params.subscribe((p) => {
            this.needLogin = (p['needLogin'] === 'true');
        });
    }

    login() {
        this.authService.login();
    }

    logout() {
        this.authService.logout();
    }
}
