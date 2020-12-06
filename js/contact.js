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

    isValid() {
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
        let element = $(event.target);
        let value = element.val();
        contactForm.telefonValid = false;

        let required = false;
        if (!contactForm.requiredTextValidation(value)) {
            element.addClass('is-invalid');
            $('#telefon-failed-required').removeClass('d-none');
        }
        else {
            required = true;
            $('#telefon-failed-required').addClass('d-none');
        }

        let validInput = false;
        if(!contactForm.phoneValidation(value)) {
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
            contactForm.telefonValid = true;
        }
    });

    $('#email').blur((event) => {
        let element = $(event.target);
        let value = element.val();
        contactForm.emailValid = false;

        let required = false;
        if (!contactForm.requiredTextValidation(value)) {
            element.addClass('is-invalid');
            $('#email-failed-required').removeClass('d-none');
        }
        else {
            required = true;
            $('#email-failed-required').addClass('d-none');
        }

        let validInput = false;
        if(!contactForm.emailValidation(value)) {
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
            contactForm.emailValid = true;
        }
    });

    $('#ime').blur((event) => {
        let element = $(event.target);
        let value = element.val();
        contactForm.imeValid = false;

        let required = false;
        if (!contactForm.requiredTextValidation(value)) {
            element.addClass('is-invalid');
            $('#ime-failed-required').removeClass('d-none');
        }
        else {
            required = true;
            $('#ime-failed-required').addClass('d-none');
        }

        let validInput = false;
        if(!contactForm.nameValidation(value)) {
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
            contactForm.imeValid = true;
        }
    });

    $('#prezime').blur((event) => {
        let element = $(event.target);
        let value = element.val();
        contactForm.prezimeValid = false;

        let required = false;
        if (!contactForm.requiredTextValidation(value)) {
            element.addClass('is-invalid');
            $('#prezime-failed-required').removeClass('d-none');
        }
        else {
            required = true;
            $('#prezime-failed-required').addClass('d-none');
        }

        let validInput = false;
        if(!contactForm.nameValidation(value)) {
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
            contactForm.prezimeValid = true;
        }
    });

    $('#poruka').blur((event) => {
        let element = $(event.target);
        let value = element.val();
        contactForm.porukaValid = false;

        let required = false;
        if (!contactForm.requiredTextValidation(value)) {
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
            contactForm.porukaValid = true;
        }
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