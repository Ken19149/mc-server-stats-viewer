async function isServerOnline(server_ip="127.0.0.1", port=25565) {
    let address = server_ip + ":" + port.toString();
    const response = await fetch("https://api.mcsrvstat.us/simple/" + address);
    const data = await response.text();
    console.log(address + ": " + data);
}

server_ip = "angangpaopao.aternos.me";
port = 51970;
isServerOnline(server_ip, port);