![Programming language](https://img.shields.io/badge/Language-Javascript-black.svg)
![Version](https://img.shields.io/badge/Version-1.2.1-blue.svg)

# BTC / USD Converter

Simple web app to convert currency; BTC to USD using Angular. Using [Coindesk API](https://www.coindesk.com/api/) for hourly averages

[Demo](http://mnl.space/BTC-USD-Converter/) | [Codepen](https://codepen.io/manuelvargas1251/pen/qPOaVN)

## Features

### Update
Calls the Coindesk API to update to the current hourly average of Bitcoin

### Round
Calls update along with `Math.round()`

### Coin [Planned]
Choose a different coin (LTC,ETH, ZEC etc.)

### Save [Planned]
Save the current amount and conversion as a record to reuse the interface (records are temporary and will not save on refresh).