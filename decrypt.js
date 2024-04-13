function keyToShift(key) {
    return Array.from(key).reduce((acc, char) => acc + char.charCodeAt(0), 0) % 33;
}

function caesarCipher(text, shift, decrypt = true) {
    const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    shift = -shift;  // Всегда дешифровка
    return Array.from(text).map(char => {
        const lower = char.toLowerCase();
        if (alphabet.includes(lower)) {
            let newIndex = (alphabet.indexOf(lower) + shift + 33) % 33;
            let newChar = alphabet[newIndex];
            return char === lower ? newChar : newChar.toUpperCase();
        }
        return char;
    }).join('');
}

function decrypt() {
    const key = document.getElementById('keyInput').value;
    const shift = keyToShift(key);
    const text = document.getElementById('encryptedText').value;
    const decryptedText = caesarCipher(text, shift);
    document.getElementById('outputText').innerText = decryptedText;
}
