import { AbstractControl } from '@angular/forms';
export class CustomValidators {
    static emailInvalid() {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const email: string = control.value;
            const domain = email.match("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
            if (email != '') {                
                if (domain) {
                    console.log(domain);
                    return null;
                } else {
                    return { 'emailInvalid': true }
                }
            } else {
                //return { 'emailInvalid': true }
            }
        };
    }
}