// 모달 오픈 버튼과 모달을 닫는 버튼을 선택합니다.
const modalOpenButtons = document.querySelectorAll('[id^="modalOpenButton"]');
const modalCloseButtons = document.querySelectorAll('[id^="modalCloseButton"]');
const modalBackground = document.querySelectorAll('[id^="modalBackground"]');
const modals = document.querySelectorAll('[id^="modalContainer"]');

// 각 모달 오픈 버튼에 클릭 이벤트를 추가합니다.
modalOpenButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        modals[index].classList.remove('hidden');
        document.body.classList.add('modal-open');
    });
});

// 각 모달 닫기 버튼에 클릭 이벤트를 추가합니다.
modalCloseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        modals[index].classList.add('hidden');
        document.body.classList.remove('modal-open');
    });
});
modalBackground.forEach((button, index) => {
    button.addEventListener('click', () => {
        modals[index].classList.add('hidden');
        document.body.classList.remove('modal-open');
    });
});

