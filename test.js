async function serverData(server_ip="127.0.0.1", port=25565) {
    let address = server_ip + ":" + port.toString();
    const response = await fetch("https://api.mcsrvstat.us/2/" + address);
    const data = await response.json();
    console.log(data);

    //document.getElementById("status").innerHTML = data;
    return data;
}

server_ip = "angangpaopao.aternos.me";
port = 51970;
serverData(server_ip, port);