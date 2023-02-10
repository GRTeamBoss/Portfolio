/**document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        updateTelegramPosts();
    }
};*/

function updateTelegramPosts() {
    const posts = update();
    const parent = document.getElementById("posts");
    for (let item of posts) {
        parent.innerHTML = item;
    }
}

function update() {
    const link = "https://t.me/s/grteambossCodingChannel/";
    const start = [
        "3"
    ];
    let posts = [];
    for (let item of start) {
        posts.push('<script async type="text/javascript" src="https://telegram.org/js/telegram-widget.js?21" data-telegram-post="grteambossCodingChannel/'+item+'" data-width="100%"></script>');
    }
    return posts;
}
