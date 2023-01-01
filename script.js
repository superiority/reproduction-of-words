// захват UI-элементов для работы с ними
const textEl = document.getElementById('text');
const speakEl = document.getElementById('speak');

// перехват клик по кнопке
speakEl.addEventListener('click', speakText);



function speakText() {
    window.speechSynthesis.cancel();

    if (textEl.value === '') {
        alert('none')
        return;
    }

    // прочитать текст
    const text = textEl.value;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}



