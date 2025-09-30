document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.modal').forEach(modal => {
        if (modal.parentElement !== document.body) {
            document.body.appendChild(modal);
        }
    });
});

document.addEventListener('shown.bs.modal', (e) => {
    const modal = e.target;
    const iframe = modal.querySelector('iframe.mapa-modal[data-src]');
    if (iframe && !iframe.src) {
        iframe.src = iframe.dataset.src;
        iframe.setAttribute('loading', 'eager');
    }
});

document.addEventListener('hidden.bs.modal', (e) => {
    const modal = e.target;
    const iframe = modal.querySelector('iframe.mapa-modal[data-src]');
    if (iframe) {
        // iframe.src = '';
    }
});