function generateKey(length = 5) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let key = "";
    for (let i = 0; i < length; i++) {
        key += letters[Math.floor(Math.random() * letters.length)];
    }
    return key;
}

function keyToShift(key) {
    return Array.from(key).reduce((acc, char) => acc + char.charCodeAt(0), 0) % 33;
}

function caesarCipher(text, shift) {
    const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
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

function encrypt() {
    const key = generateKey();
    const shift = keyToShift(key);
    const text = document.getElementById('inputText').value;
    const encryptedText = caesarCipher(text, shift);
    document.getElementById('outputText').innerText = "Зашифрованный текст: " + encryptedText;
    alert("Ключ шифрования: " + key);
}

function goToDecryptPage() {
    window.location.href = 'decrypt.html';
}
