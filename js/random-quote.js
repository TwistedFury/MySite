window.onload = function() {
    fetch("https://zenquotes.io/api/random")
        .then(response => response.json())
        .then(data => {
            const quote = data[0].q;
            const author = data[0].a;
            document.querySelector(".quote-text").innerHTML = `"${quote}" — ${author}`;
        })
        .catch(error => {
            console.error("Error fetching quote:", error);
        });
};
