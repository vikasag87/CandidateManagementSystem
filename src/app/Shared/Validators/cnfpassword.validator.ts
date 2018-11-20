import { FormGroup } from '@angular/forms';

export class ConfirmPasswordValidator {
    static validate(fg: FormGroup) {
       
        let password = fg.controls.password.value;
        let cnfpassword = fg.controls.cnfpassword.value;
 
        if (cnfpassword !== password) {
            return {
                
                'passwordmismatch': true
                
            };
        }
 
        return null;
 
    }
}