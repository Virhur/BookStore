class BuyForm {
    constructor () {    
        this.imeValid = false;
        this.drzavaValid = false;
        this.drzavaManualValid = false;
        this.drzavaManualRequired = false;
        this.adresaValid = false;
        this.postanskiBrojValid = false;
        this.mestoValid = false;
        this.telefonValid = false;
        this.emailValid = false;
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
        let element = $('#name');
        let value = element.val();
        this.imeValid = false;

        let required = false;
        if (!this.requiredTextValidation(value)) {
            element.addClass('is-invalid');
            $('#name-failed-required').removeClass('d-none');
        }
        else {
            required = true;
            $('#name-failed-required').addClass('d-none');
        }

        let validInput = false;
        if(!this.nameValidation(value)) {
            element.addClass('is-invalid');
            $('#name-failed-format').removeClass('d-none');
        }
        else {
            validInput = true;
            $('#name-failed-format').addClass('d-none');
        }

        if (required && validInput) {
            element.addClass('is-valid');
            element.removeClass('is-invalid');
            this.imeValid = true;
        }

        return this.imeValid;
    }

    validateDrzava() {
        let element = $('#drzava');
        let value = element.val();
        this.drzavaValid = false;

        if (!this.requiredSelectValidation(value)) {
            element.addClass('is-invalid');
            $('#drzava-failed-required').removeClass('d-none');
        }
        else {
            $('#drzava-failed-required').addClass('d-none');
            element.removeClass('is-invalid');
            element.addClass('is-valid');
            this.drzavaValid = true;
        }

        if (value == 5) {
            $('#drzava_manual_group').removeClass('d-none');
            this.drzavaManualRequired = true;
            this.drzavaManualValid = false;
        }
        else {
            $('#drzava_manual_group').addClass('d-none');
            this.drzavaManualRequired = false;
            this.drzavaManualValid = true;
        }

        return this.drzavaValid;
    }

    validateDrzavaManual() {
        let element = $('#drzava_manual');
        let value = element.val();
        this.drzavaManualValid = false;

        let required = false;
        if (this.drzavaManualRequired && !this.requiredTextValidation(value)) {
            element.addClass('is-invalid');
            $('#drzava_manual-failed-required').removeClass('d-none');
        }
        else {
            required = true;
            $('#drzava_manual-failed-required').addClass('d-none');
        }

        if (required) {
            element.addClass('is-valid');
            element.removeClass('is-invalid');
            this.drzavaManualValid = true;
        }

        return this.drzavaManualValid;
    }

    validateAdresa() {
        let element = $('#ulica_i_broj');
        let value = element.val();
        this.adresaValid = false;

        let required = false;
        if (!this.requiredTextValidation(value)) {
            element.addClass('is-invalid');
            $('#ulica_i_broj-failed-required').removeClass('d-none');
        }
        else {
            required = true;
            $('#ulica_i_broj-failed-required').addClass('d-none');
        }

        if (required) {
            element.addClass('is-valid');
            element.removeClass('is-invalid');
            this.adresaValid = true;
        }

        return this.adresaValid;
    }

    validatePostanskiBroj() {
        let element = $('#postanski_broj');
        let value = element.val();
        this.postanskiBrojValid = false;

        let required = false;
        if (!this.requiredTextValidation(value)) {
            element.addClass('is-invalid');
            $('#postanski_broj-failed-required').removeClass('d-none');
        }
        else {
            required = true;
            $('#postanski_broj-failed-required').addClass('d-none');
        }

        if (required) {
            element.addClass('is-valid');
            element.removeClass('is-invalid');
            this.postanskiBrojValid = true;
        }

        return this.postanskiBrojValid;
    }

    validateMesto() {
        let element = $('#mesto');
        let value = element.val();
        this.mestoValid = false;

        let required = false;
        if (!this.requiredTextValidation(value)) {
            element.addClass('is-invalid');
            $('#mesto-failed-required').removeClass('d-none');
        }
        else {
            required = true;
            $('#mesto-failed-required').addClass('d-none');
        }

        if (required) {
            element.addClass('is-valid');
            element.removeClass('is-invalid');
            this.mestoValid = true;
        }

        return this.mestoValid;
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


    isValid() {
        this.validateIme();
        this.validateDrzava();
        this.validateDrzavaManual();
        this.validateAdresa();
        this.validatePostanskiBroj();
        this.validateMesto();
        this.validateTelefon();
        this.validateEmail();

        return this.imeValid == true &&
            this.drzavaValid == true &&
            this.drzavaManualValid == true &&
            this.adresaValid == true &&
            this.postanskiBrojValid == true &&
            this.mestoValid == true &&
            this.telefonValid == true &&
            this.emailValid == true;
    }
}

$(function () {
    //init korpe
    cart.onCartPage = true;
    if (cart.cart.length !== 0) {
        $('.cart-has-items').removeClass('d-none');
        $('#cart-has-no-items').addClass('d-none');
    } else {
        $('.cart-has-items').addClass('d-none');
        $('#cart-has-no-items').removeClass('d-none');
    }

    //init forme
    let buyForm = new BuyForm();

    $('#name').blur((event) => {
        buyForm.validateIme();
    });

    $('#ulica_i_broj').blur((event) => {
       buyForm.validateAdresa();
    });

    $('#postanski_broj').blur((event) => {
        buyForm.validatePostanskiBroj();
    });

    $('#mesto').blur((event) => {
        buyForm.validateMesto();
    });

    $('#telefon').blur((event) => {
        buyForm.validateTelefon();
    });

    $('#email').blur((event) => {
        buyForm.validateEmail();
    });

    $('#drzava').change((event) => {
        buyForm.validateDrzava();
    });

    $('#drzava_manual').blur((event) => {
        buyForm.validateDrzavaManual();
    });

    $('#buy-form').on('reset', (event) => {
        $('.invalid-feedback').addClass('d-none');
        $('.form-control').removeClass('is-valid');
        $('.form-control').removeClass('is-invalid');
    });

    $('#buy-form').on('submit', (event) => {
        event.preventDefault();
        if (buyForm.isValid()) {
            $('#success-kupovina').removeClass('d-none');
            localStorage.clear('cart');
            cart = new Cart();
            cart.loadCartPage();
        }
    });
})