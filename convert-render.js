console.info('foo');

function fetchConvert(markdownFile) {
    console.info('bar');
    return fetch(markdownFile)
        .then(function(response) {
            return response.text();
        })
        .then(function(text) {
            // console.log(text);
            let converter = new showdown.Converter();
            return converter.makeHtml(text);
        });

}