document.addEventListener('DOMContentLoaded', () => {
    const greetButton = document.createElement('button');
    greetButton.textContent = 'Say Hello!';
    greetButton.style.padding = '10px 20px';
    greetButton.style.marginTop = '20px';
    greetButton.style.cursor = 'pointer';
    
    greetButton.addEventListener('click', () => {
        alert('안녕하세요! 제 소개 페이지에 방문해 주셔서 감사합니다.');
    });

    document.body.appendChild(greetButton);
});
const modal = document.createElement('div');
modal.style.display = 'none';
modal.style.position = 'fixed';
modal.style.top = '50%';
modal.style.left = '50%';
modal.style.transform = 'translate(-50%, -50%)';
modal.style.padding = '20px';
modal.style.backgroundColor = '#fff';
modal.style.borderRadius = '8px';
modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

document.body.appendChild(modal);

document.querySelector('button').addEventListener('click', () => {
    modal.textContent = "저는 [이름]입니다. 프론트엔드 개발자입니다!";
    modal.style.display = 'block';
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});