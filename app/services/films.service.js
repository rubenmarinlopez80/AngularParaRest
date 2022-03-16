import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let FilmsService = class FilmsService {
    constructor(http) {
        this.http = http;
        console.log('servicio HTTP:');
    }
    getUsers() {
        return this.http.get('http://demo-openshift-artifact-maven-git-tpvams.apps.pre.aragon.es/films');
    }
};
FilmsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], FilmsService);
export { FilmsService };
//# sourceMappingURL=films.service.js.map