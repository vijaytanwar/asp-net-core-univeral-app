document.addEventListener("DOMContentLoaded", () => {
    let page_container = document.querySelector("#Page_Container");
    fetch("./generated_template_file.html").then((response) => {
        // When the page is loaded convert it to text
        return response.text()
    }).then((html) => {
        document.querySelector("#templateHolder").innerHTML = html;

        document.addEventListener("click", (e) => {
            if (e.target.tagName == "A") {
                window.history.pushState(null, null, e.target.href);
                let chunks = e.target.href.toLowerCase().split("/");
                let fileName = "/" + (chunks[chunks.length - 1] === "" ? "index" : chunks[chunks.length - 1]);
                let template = document.getElementById(fileName).innerHTML;
                let str = razor.render(template, { model: { Title: "Index", Message: "Hello" } });
                page_container.innerHTML = str.replace(/~\//g, "");
                e.preventDefault();
                return false;
            }
        })
    });
}); 