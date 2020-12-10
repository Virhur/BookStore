class ContactForm {
    constructor () {    
        this.imeValid = false;
        this.prezimeValid = false;
        this.telefonValid = false;
        this.emailValid = false;
        this.porukaValid = false;
    }

    requiredTextValidation(value) {
        if (value.trim().length === 0)
            return false;

        return true;
    }

    requiredSelectValidation(value) {
        if (value == 0)
            return false;
        
        return true;
    }

    emailValidation(value) {
        let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

        return regex.test(value);
    }

    phoneValidation(value) {
        let regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

        return regex.test(value);
    }

    nameValidation(value) {
        let regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

        return regex.test(value);
    }

    validateIme() {
        let element = $('#ime');
        let value = element.val();
        this.imeValid = false;

        let required = false;
        if (!this.requiredTextValidation(value)) {
            element.addClass('is-invalid');
            $('#ime-failed-required').removeClass('d-none');
        }
        else {
            required = true;
            $('#ime-failed-required').addClass('d-none');
        }

        let validInput = false;
        if(!this.nameValidation(value)) {
            element.addClass('is-invalid');
            $('#ime-failed-format').removeClass('d-none');
        }
        else {
            validInput = true;
            $('#ime-failed-format').addClass('d-none');
        }

        if (required && validInput) {
            element.addClass('is-valid');
            element.removeClass('is-invalid');
            this.imeValid = true;
        }

        return this.imeValid;
    }

    validatePrezime() {
        let element = $('#prezime');
        let value = element.val();
        this.prezimeValid = false;

        let required = false;
        if (!this.requiredTextValidation(value)) {
            element.addClass('is-invalid');
            $('#prezime-failed-required').removeClass('d-none');
        }
        else {
            required = true;
            $('#prezime-failed-required').addClass('d-none');
        }

        let validInput = false;
        if(!this.nameValidation(value)) {
            element.addClass('is-invalid');
            $('#prezime-failed-format').removeClass('d-none');
        }
        else {
            validInput = true;
            $('#prezime-failed-format').addClass('d-none');
        }

        if (required && validInput) {
            element.addClass('is-valid');
            element.removeClass('is-invalid');
            this.prezimeValid = true;
        }
    }

    validateTelefon() {
        let element = $('#telefon');
        let value = element.val();
        this.telefonValid = false;

        let required = false;
        if (!this.requiredTextValidation(value)) {
            element.addClass('is-invalid');
            $('#telefon-failed-required').removeClass('d-none');
        }
        else {
            required = true;
            $('#telefon-failed-required').addClass('d-none');
        }

        let validInput = false;
        if(!this.phoneValidation(value)) {
            element.addClass('is-invalid');
            $('#telefon-failed-format').removeClass('d-none');
        }
        else {
            validInput = true;
            $('#telefon-failed-format').addClass('d-none');
        }

        if (required && validInput) {
            element.addClass('is-valid');
            element.removeClass('is-invalid');
            this.telefonValid = true;
        }

        return this.telefonValid;
    }

    validateEmail() {
        let element = $('#email');
        let value = element.val();
        this.emailValid = false;

        let required = false;
        if (!this.requiredTextValidation(value)) {
            element.addClass('is-invalid');
            $('#email-failed-required').removeClass('d-none');
        }
        else {
            required = true;
            $('#email-failed-required').addClass('d-none');
        }

        let validInput = false;
        if(!this.emailValidation(value)) {
            element.addClass('is-invalid');
            $('#email-failed-format').removeClass('d-none');
        }
        else {
            validInput = true;
            $('#email-failed-format').addClass('d-none');
        }

        if (required && validInput) {
            element.addClass('is-valid');
            element.removeClass('is-invalid');
            this.emailValid = true;
        }

        return this.emailValid;
    }

    validatePoruka() {
        let element = $('#poruka');
        let value = element.val();
        this.porukaValid = false;

        let required = false;
        if (!this.requiredTextValidation(value)) {
            element.addClass('is-invalid');
            $('#poruka-failed-required').removeClass('d-none');
        }
        else {
            required = true;
            $('#poruka-failed-required').addClass('d-none');
        }

        if (required) {
            element.addClass('is-valid');
            element.removeClass('is-invalid');
            this.porukaValid = true;
        }

        return this.porukaValid;
    }


    isValid() {
        this.validateIme();
        this.validatePrezime();
        this.validateTelefon();
        this.validateEmail();
        this.validatePoruka();

        return this.imeValid == true &&
        this.prezimeValid == true &&
        this.telefonValid == true &&
        this.emailValid == true &&
        this.porukaValid == true;
    }
}

$(function () {
    let contactForm = new ContactForm();

    $('#telefon').blur((event) => {
        contactForm.validateTelefon();
    });

    $('#email').blur((event) => {
        contactForm.validateEmail();
    });

    $('#ime').blur((event) => {
        contactForm.validateIme();
    });

    $('#prezime').blur((event) => {
        contactForm.validatePrezime();
    });

    $('#poruka').blur((event) => {
        contactForm.validatePoruka();
    });

    $('#contact-form').on('submit', (event) => {
        event.preventDefault();
        if (contactForm.isValid()) {
            new Noty({
                text: 'Uspešno ste poslali poruku!',
                type: 'success'
            }).show();
        }
    });
});