function loadJumbotron() {
    fetch('jumbotron-part.html')
        .then(function(response) {
            return response.text();
        })
        .then(function(html) {
            // console.log(text);
            let el = document.getElementById('jumbotron-shell');
            el.innerHTML = html;
        });
}

function loadContent(markdownFile) {
    return fetch(markdownFile)
        .then(function(response) {
            return response.text();
        })
        .then(function(text) {
            // console.log(text);
            let converter = new showdown.Converter();
            let html = converter.makeHtml(text);
            let el = document.getElementById('content');
            el.innerHTML = html;
        });
}