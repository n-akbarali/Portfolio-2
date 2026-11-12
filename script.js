const items = document.querySelectorAll('.faq-item');

items.forEach(item => {
    const btn = item.querySelector('.faq-btn');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-btn i.fa-chevron-down');

    btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        items.forEach(other => {
            other.classList.remove('active');
            other.querySelector('.faq-content').style.maxHeight = null;
            other.querySelector('.faq-btn i.fa-chevron-down').style.transform = 'rotate(0deg)';
        });

        if (!isOpen) {
            item.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.style.transform = 'rotate(180deg)';
        }
    });
});