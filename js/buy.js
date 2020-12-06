class BuyForm {
    constructor () {    
        this.imeValid = false;
        this.drzavaValid = false;
        this.drzavaManualValid = true;
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

    isValid() {
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
        let element = $(event.target);
        let value = element.val();
        buyForm.imeValid = false;

        let required = false;
        if (!buyForm.requiredTextValidation(value)) {
            element.addClass('is-invalid');
            $('#name-failed-required').removeClass('d-none');
        }
        else {
            required = true;
            $('#name-failed-required').addClass('d-none');
        }

        let validInput = false;
        if(!buyForm.nameValidation(value)) {
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
            buyForm.imeValid = true;
        }
    });

    $('#ulica_i_broj').blur((event) => {
        let element = $(event.target);
        let value = element.val();
        buyForm.adresaValid = false;

        let required = false;
        if (!buyForm.requiredTextValidation(value)) {
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
            buyForm.adresaValid = true;
        }
    });

    $('#postanski_broj').blur((event) => {
        let element = $(event.target);
        let value = element.val();
        buyForm.postanskiBrojValid = false;

        let required = false;
        if (!buyForm.requiredTextValidation(value)) {
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
            buyForm.postanskiBrojValid = true;
        }
    });

    $('#mesto').blur((event) => {
        let element = $(event.target);
        let value = element.val();
        buyForm.mestoValid = false;

        let required = false;
        if (!buyForm.requiredTextValidation(value)) {
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
            buyForm.mestoValid = true;
        }
    });

    $('#telefon').blur((event) => {
        let element = $(event.target);
        let value = element.val();
        buyForm.telefonValid = false;

        let required = false;
        if (!buyForm.requiredTextValidation(value)) {
            element.addClass('is-invalid');
            $('#telefon-failed-required').removeClass('d-none');
        }
        else {
            required = true;
            $('#telefon-failed-required').addClass('d-none');
        }

        let validInput = false;
        if(!buyForm.phoneValidation(value)) {
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
            buyForm.telefonValid = true;
        }
    });

    $('#email').blur((event) => {
        let element = $(event.target);
        let value = element.val();
        buyForm.emailValid = false;

        let required = false;
        if (!buyForm.requiredTextValidation(value)) {
            element.addClass('is-invalid');
            $('#email-failed-required').removeClass('d-none');
        }
        else {
            required = true;
            $('#email-failed-required').addClass('d-none');
        }

        let validInput = false;
        if(!buyForm.emailValidation(value)) {
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
            buyForm.emailValid = true;
        }
    });

    $('#drzava').change((event) => {
        let element = $(event.target);
        let value = element.val();
        buyForm.drzavaValid = false;

        if (!buyForm.requiredSelectValidation(value)) {
            element.addClass('is-invalid');
            $('#drzava-failed-required').removeClass('d-none');
        }
        else {
            $('#drzava-failed-required').addClass('d-none');
            element.removeClass('is-invalid');
            element.addClass('is-valid');
            buyForm.drzavaValid = true;
        }

        if (value == 5) {
            $('#drzava_manual_group').removeClass('d-none');
            $('#drzava_manual').prop('required', true);
            buyForm.drzavaManualValid = false;
        }
        else {
            $('#drzava_manual_group').addClass('d-none');
            $('#drzava_manual').prop('required', false);
            buyForm.drzavaManualValid = true;
        }
    });

    $('#drzava_manual').blur((event) => {
        let element = $(event.target);
        let value = element.val();
        buyForm.drzavaManualValid = false;

        let required = false;
        if (!buyForm.requiredTextValidation(value)) {
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
            buyForm.drzavaManualValid = true;
        }
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