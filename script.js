// Configurações do Carrossel de Treinamentos
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os carrosséis na página
    const carousels = document.querySelectorAll('.carousel-container');
    
    // Adiciona eventos de arrastar para cada carrossel
    carousels.forEach(carousel => {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        // Evento quando mouse é pressionado
        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
            carousel.style.cursor = 'grabbing';
        });
        
        // Evento quando mouse é liberado
        document.addEventListener('mouseup', () => {
            isDown = false;
            carousel.style.cursor = 'grab';
        });
        
        // Evento de movimento do mouse para arrastar
        document.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });
    });
    
    // Efeitos hover nos cards de treinamento
    const trainingCards = document.querySelectorAll('.training-card');
    trainingCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
    
    // Animação da barra de progresso (dados demonstração)
    document.querySelectorAll('.progress-bar').forEach(bar => {
        const initialWidth = parseFloat(bar.style.width) || 0;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.transition = 'width 1s ease';
            bar.style.width = initialWidth + '%';
        }, 300);
    });
});