

import { Component } from '@angular/core';
import { RegisterModel } from './register.model';
import { RegisterJsonInterface } from './RegisterJsonInterface';
@Component({
    selector: 'app-register',
    templateUrl: './app.register.component.html'
})

export class RegisterComponent {

    private firstName: string;
    private lastName: string;
    private emailId: string;
    private gender: string;
    private mobileNo: string
    private houseLoan: boolean;
    private carLoan: boolean;
    private personalLoan: boolean;
    private description: string;


    private jsonObjToDisplay: RegisterJsonInterface;

    private jsonAsData: any;

    private carList: any = [
        { id: 1, name: "Mercedes" },
        { id: 2, name: "BMW" },
        { id: 3, name: "Audi" },
        { id: 4, name: "Maruti" }
    ];

    private currentCar: number = 1; //For default selection  

    private jsonResult: string;
    private outputObj: RegisterModel;


    clickButton(): void {
        let registeModel: RegisterModel = this.getPopulatedModel();
        let jsonStringVal = JSON.stringify(registeModel);
        console.log("Final response : " + jsonStringVal);
        this.jsonResult = jsonStringVal;
        this.outputObj = registeModel;

        this.jsonAsData = JSON.parse(this.jsonResult);
        console.log("Json As Data :::", this.jsonAsData);

        this.jsonObjToDisplay = JSON.parse(this.jsonResult);
        console.log("jsonObjToDisplay :::", this.jsonObjToDisplay);

    }

    getPopulatedModel(): RegisterModel {
        let registeModel: RegisterModel = new RegisterModel();
        registeModel.$firstName = this.firstName;
        registeModel.$lastName = this.lastName;
        registeModel.$gender = this.gender;
        registeModel.$emailId = this.emailId;
        registeModel.$mobileNo = this.mobileNo;
        registeModel.$houseLoan = this.houseLoan;
        registeModel.$carLoan = this.carLoan;
        registeModel.$personalLoan = this.personalLoan;
        registeModel.$description = this.description;

        let selectedCarName: string = this.carList.find((item: any) => item.id === +this.currentCar).name;

        registeModel.$selectedCar = selectedCarName;
        return registeModel;
    }
}