import Swal from 'sweetalert2';

export const sweetalert2 = {
    alertSweetalert: alertSweetalert,
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
