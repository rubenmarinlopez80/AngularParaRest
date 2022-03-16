import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(filmsService) {
        this.filmsService = filmsService;
        this.title = 'Ecr';
        console.log('el componente se ha creado');
    }
    ngOnInit() {
        console.log('El componente se ha inicializado');
        this.filmsService.getUsers()
            .subscribe((response) => console.log(response));
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map