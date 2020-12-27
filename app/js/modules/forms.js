const forms = (formSelector) => {
    const form = document.querySelector(formSelector);
    form.addEventListener('submit', sendForm);

    async function sendForm(e) {
        e.preventDefault();
        let error = validation(form);
        if (error === 0) {
            let data = new FormData(form);
            form.reset();
            let response = await fetch('server.php', {
                method: 'POST',
                body: data
            });
        }
    }

    function validation(form) {
        let formReq = form.querySelectorAll('._req');
        let error = false;
        for (let i = 0; i < formReq.length; i++) {
            formRemoveError(formReq[i]);
            let correct = false;
            if (formReq[i].value != "") {
                correct = true;
            }
            if (formReq[i].classList.contains('_email')) {
                correct = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(formReq[i].value);
            }
            if (formReq[i].classList.contains('_phone')) {
                correct = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(formReq[i].value);
            }
            if (!correct) {
                error = true;
                formAddError(formReq[i]);
            }
        }
        return error;
    }

    function formAddError(input) {
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.classList.remove('_error');
    }
};

export default forms;