# isk-brkr

## command

```
docker build -t isk/isk-broker .
docker run -d --restart=always -p 3000:1880  --name broker -e NODERED_USERNAME=administrator isk/isk-broker
```