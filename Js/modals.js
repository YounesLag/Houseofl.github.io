
const openButtons = document.querySelectorAll("[data-open-modal]");
document.addEventListener("DOMContentLoaded", function() {
    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalNum = button.getAttribute("data-open-modal");
            const dialog = document.querySelector(`dialog[data-modal="${modalNum}"]`);
            dialog.showModal();
        });
    });
});
const dialogs = document.querySelectorAll("dialog");
dialogs.forEach(dialog => {
    dialog.addEventListener("click", e => {
        const dialogDimensions = dialog.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            dialog.close();
        }
    });
});

