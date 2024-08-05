import Swal from 'sweetalert2';

export const sweetAlertHub = {
    alertSweetalert: alertSweetalert,
    errorMessage: errorMessage
}

function alertSweetalert(title, text, icon) {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: 'OK',
        customClass: {
            container: 'swal2-dark'
        }
    });
}

function errorMessage(description) {
    Swal.fire({
        title: "Error",
        text: description,
        icon: "error",
        confirmButtonColor: "#000000",
    });
}

