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


async function getIpAddress() {
  const ip = await fetch('https://api.ipify.org?format=json').then((response) => {return JSON.stringify(response.data.ip).replace(/"/g, '') + ':' + location.port.toString()}).catch((err) => {window.alert('Your internet connection is lost!\n' + err); return null});
  return ip
}

async function sendMessage() {
  let name = document.getElementById("field-name").value;
  let email = document.getElementById("field-email").value;
  let phone = document.getElementById("field-tel").value;
  let msg = document.getElementById("field-message").value;
  // const ip_address = await getIpAddress();
  const ip_address = "localhost";
  const message = `<b>Сообщение с сайта ${document.URL}</b>%0A<b>Имя: </b>${name}%0A<b>Номер телефона: </b>${phone}%0A<b>Электронная почта: </b>${email}%0A<b>Браузер: </b>${window.navigator.userAgent}%0A<b>IP-адрес: </b>${ip_address}%0A<b>Сообщение: </b>${msg}`;
  let apiURI = `https://api.telegram.org/bot6659263663:AAGEDDePe5Vub8KA2Op6pi_GtK1tNm-5_jg/sendMessage?parse_mode=html&chat_id=167628351&text=${message}`;
  const response = await fetch(apiURI).then((response) => {window.alert("Your request sended successfully!")}).catch((err) => {window.alert('Your internet connection is lost or Telegram servers doesn\'t work now!\n' + err);});
  console.log(`[*] Message status -> ${response.status}`);
}