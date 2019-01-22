export class RegisterModel {

    private firstName: string;
    private lastName: string;
    private emailId: string;
    private gender: string;
    private mobileNo: string;
    private houseLoan: boolean;
    private carLoan: boolean;
    private description: string;

    /**
     * Getter $selectedCar
     * @return {string}
     */
	public get $selectedCar(): string {
		return this.selectedCar;
	}

    /**
     * Setter $selectedCar
     * @param {string} value
     */
	public set $selectedCar(value: string) {
		this.selectedCar = value;
	}
    private selectedCar: string;

    /**
     * Getter $firstName
     * @return {string}
     */
	public get $firstName(): string {
		return this.firstName;
	}

    /**
     * Getter $lastName
     * @return {string}
     */
	public get $lastName(): string {
		return this.lastName;
	}

    /**
     * Getter $emailId
     * @return {string}
     */
	public get $emailId(): string {
		return this.emailId;
	}

    /**
     * Getter $gender
     * @return {string}
     */
	public get $gender(): string {
		return this.gender;
	}

    /**
     * Getter $mobileNo
     * @return {string}
     */
	public get $mobileNo(): string {
		return this.mobileNo;
	}

    /**
     * Getter $houseLoan
     * @return {boolean}
     */
	public get $houseLoan(): boolean {
		return this.houseLoan;
	}

    /**
     * Getter $carLoan
     * @return {boolean}
     */
	public get $carLoan(): boolean {
		return this.carLoan;
	}

    /**
     * Getter $personalLoan
     * @return {boolean}
     */
	public get $personalLoan(): boolean {
		return this.personalLoan;
	}

    /**
     * Setter $firstName
     * @param {string} value
     */
	public set $firstName(value: string) {
		this.firstName = value;
	}

    /**
     * Setter $lastName
     * @param {string} value
     */
	public set $lastName(value: string) {
		this.lastName = value;
	}

    /**
     * Setter $emailId
     * @param {string} value
     */
	public set $emailId(value: string) {
		this.emailId = value;
	}

    /**
     * Setter $gender
     * @param {string} value
     */
	public set $gender(value: string) {
		this.gender = value;
	}

    /**
     * Setter $mobileNo
     * @param {string} value
     */
	public set $mobileNo(value: string) {
		this.mobileNo = value;
	}

    /**
     * Setter $houseLoan
     * @param {boolean} value
     */
	public set $houseLoan(value: boolean) {
		this.houseLoan = value;
	}

    /**
     * Setter $carLoan
     * @param {boolean} value
     */
	public set $carLoan(value: boolean) {
		this.carLoan = value;
	}

    /**
     * Setter $personalLoan
     * @param {boolean} value
     */
	public set $personalLoan(value: boolean) {
		this.personalLoan = value;
	}
    private personalLoan: boolean;


    /**
     * Getter $description
     * @return {string}
     */
	public get $description(): string {
		return this.description;
	}

    /**
     * Setter $description
     * @param {string} value
     */
	public set $description(value: string) {
		this.description = value;
	}
    
}