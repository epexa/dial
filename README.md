# DIscovery And Launch protocol

## Specification (Version 2.2.1)
https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGlhbC1tdWx0aXNjcmVlbi5vcmd8ZGlhbHxneDo1MWVmNzNhZDUyYTI0YTkz

## gssdp-discover

Install:
`sudo apt install gssdp-discover`

Run:
`gssdp-discover --timeout=3 -t urn:dial-multiscreen-org:service:dial:1`

Remove:
`sudo apt remove gupnp-tools libgssdp-1.2-0 libgtksourceview-4-0 libgtksourceview-4-common libgupnp-1.2-0 libgupnp-av-1.0-2`

## DIAL Services

DIAL Service Info:
http://TV-IP-ADDRESS:7678/nservice/

Devices Info:
http://TV-IP-ADDRESS:9197/dmr

MultiScreen Service Info:
http://TV-IP-ADDRESS:8001

MultiScreen Service Info JSON format:
http://TV-IP-ADDRESS:8001/api/v2/

MultiScreen Service Logs
http://TV-IP-ADDRESS:8001/logs

## DIAL App State

YouTube App Info
http://TV-IP-ADDRESS:8001/api/v2/applications/111299001912

YouTube App Full Info
http://TV-IP-ADDRESS:8080/ws/apps/YouTube

Samsung Internet App Info
http://TV-IP-ADDRESS:8001/api/v2/applications/3201907018784

## DIAL

Open YouTube:
```bash
curl -X POST http://TV-IP-ADDRESS:8001/api/v2/applications/111299001912
```

Alternative open video in YouTube:
```bash
curl -X POST \
  -i http://TV-IP-ADDRESS:8080/ws/apps/YouTube \
  -H 'Content-Type: text/plain' \
  -d 'v=iLsQ5afrGos'
```

Open browser:
```bash
curl -X POST http://TV-IP-ADDRESS:8001/api/v2/applications/3201907018784
```

Alternative open browser:
```bash
curl -X POST -H 'Content-Length: 0' -i http://TV-IP-ADDRESS:8080/ws/apps/3201907018784
```

Close browser:
```bash
curl -X DELETE http://TV-IP-ADDRESS:8001/api/v2/applications/3201907018784
```

## Apps list
https://github.com/tavicu/homebridge-samsung-tizen/wiki/Applications

## Send keys

Connect:
```
const ws = new WebSocket('wss://TV-IP-ADDRESS:8002/api/v2/channels/samsung.remote.control');
ws.onmessage = (e) => console.log(e.data);
```

Send home key:
```
ws.send(JSON.stringify({
    method: 'ms.remote.control',
    params: {
        TypeOfRemote: 'SendRemoteKey',
        Cmd: 'Click',
        Option: 'false',
        DataOfCmd: 'KEY_HOME',
    },
}));
```

Send return key:
```
ws.send(JSON.stringify({
    method: 'ms.remote.control',
    params: {
        TypeOfRemote: 'SendRemoteKey',
        Cmd: 'Click',
        Option: 'false',
        DataOfCmd: 'KEY_RETURN',
    },
}));
```

Send mute key:
```
ws.send(JSON.stringify({
    method: 'ms.remote.control',
    params: {
        TypeOfRemote: 'SendRemoteKey',
        Cmd: 'Click',
        Option: 'false',
        DataOfCmd: 'KEY_MUTE',
    },
}));
```

Send right key:
```
ws.send(JSON.stringify({
    method: 'ms.remote.control',
    params: {
        TypeOfRemote: 'SendRemoteKey',
        Cmd: 'Click',
        Option: 'false',
        DataOfCmd: 'KEY_RIGHT',
    },
}));
```

Send fast forward key:
```
ws.send(JSON.stringify({
    method: 'ms.remote.control',
    params: {
        TypeOfRemote: 'SendRemoteKey',
        Cmd: 'Click',
        Option: 'false',
        DataOfCmd: 'KEY_FF',
    },
}));
```

Send play key:
```
ws.send(JSON.stringify({
    method: 'ms.remote.control',
    params: {
        TypeOfRemote: 'SendRemoteKey',
        Cmd: 'Click',
        Option: 'false',
        DataOfCmd: 'KEY_PLAY',
    },
}));
```

Send browser key:
```
ws.send(JSON.stringify({
    method: 'ms.remote.control',
    params: {
        TypeOfRemote: 'SendRemoteKey',
        Cmd: 'Click',
        Option: 'false',
        DataOfCmd: 'KEY_CONVERGENCE',
    },
}));
```

Send power key:
```
ws.send(JSON.stringify({
    method: 'ms.remote.control',
    params: {
        TypeOfRemote: 'SendRemoteKey',
        Cmd: 'Click',
        Option: 'false',
        DataOfCmd: 'KEY_POWER',
    },
}));
```

Send picture mode key:
```
ws.send(JSON.stringify({
    method: 'ms.remote.control',
    params: {
        TypeOfRemote: 'SendRemoteKey',
        Cmd: 'Click',
        Option: 'false',
        DataOfCmd: 'KEY_PMODE',
    },
}));
```

## Full keys list
https://github.com/balmli/com.samsung.smart/blob/master/keys.md

## Play URL (with Any View):
```bash
curl --location --request POST 'http://TV-IP-ADDRESS:9197/upnp/control/AVTransport1' \
--header 'SOAPAction: "urn:schemas-upnp-org:service:AVTransport:1#SetAVTransportURI"' \
--header 'Content-Type: application/xml' \
--data-raw '<?xml version="1.0" encoding="utf-8"?>
                <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
                    <s:Body>
                    <u:SetAVTransportURI xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
                        <InstanceID>0</InstanceID>
                        <CurrentURI>http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4</CurrentURI><CurrentURIMetaData></CurrentURIMetaData>
                    </u:SetAVTransportURI>
                    </s:Body>
                </s:Envelope>'
```
```bash
curl --location --request POST 'http://TV-IP-ADDRESS:9197/upnp/control/AVTransport1' \
--header 'SOAPAction: "urn:schemas-upnp-org:service:AVTransport:1#Play"' \
--header 'Content-Type: application/xml' \
--data-raw '<?xml version="1.0" encoding="utf-8"?>
                <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
                    <s:Body>
                    <u:Play xmlns:u="urn:schemas-upnp-org:service:AVTransport:1">
                        <InstanceID>0</InstanceID>
                        <Speed>1</Speed>
                    </u:Play>
                    </s:Body>
                </s:Envelope>'
```

##  Get volume:
```bash
curl --location --request POST 'http://TV-IP-ADDRESS:9197/upnp/control/RenderingControl1' \
--header 'SOAPAction: "urn:schemas-upnp-org:service:RenderingControl:1#GetVolume"' \
--header 'Content-Type: application/xml' \
--data-raw '<?xml version="1.0" encoding="utf-8"?>
                <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
                    <s:Body>
                    <u:GetVolume xmlns:u="urn:schemas-upnp-org:service:RenderingControl:1">
                        <InstanceID>0</InstanceID>
                        <Channel>Master</Channel>
                    </u:GetVolume>
                    </s:Body>
                </s:Envelope>'
```
------------

## Contacts

Telegram: [@epexa](https://t.me/epexa)
