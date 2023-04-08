document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const text = e.target.result;
        const wordCount = countWords(text);
        const characterCount = countCharacters(text);

        console.log(`Word count: ${wordCount}`);
        console.log(`Character count: ${characterCount}`);
    };

    reader.readAsText(file);
});

function countWords(text) {
    const words = text.trim().split(/\s+/);
    return words.length;
}

function countCharacters(text) {
    text = text.replace(/[*_#`~[\]()<>-]/g, '');
    return text.length;
}


