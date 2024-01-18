## **FreeCodeCamp** - Information Security and Quality Assurance

## Objective

- #### Build a full stack JavaScript app that is functionally similar to this: https://giant-chronometer.glitch.me/.

# Project Stock Price Checker

- **SET NODE_ENV** to `test` without quotes and set DB to your mongo connection string

- Complete the project in `routes/api.js` or by creating a handler/controller

- You will add any security features to `server.js`

- You will create all of the functional tests in `tests/2_functional-tests.js`

## User Stories

I can **GET** `/api/stock-prices` with form data containing a Nasdaq stock ticker and recieve back an object _stockData_.

- In _stockData_, I can see the _stock_(string, the ticker), _price_(decimal in string format), and _likes_(int).

- I can also pass along field like as **true**(boolean) to have my like added to the stock(s). Only 1 like per ip should be accepted.

- If I pass along 2 stocks, the return object will be an array with both stock's info but instead of _likes_, it will display _rel_likes_(the difference between the likes) on both.

- A good way to recieve current price is the following external API(replacing 'GOOG' with your stock): `https://finance.google.com/finance/info?q=NASDAQ%3aGOOG`

- All 5 functional tests are complete and passing.

## Example usage:

```
/api/stock-prices?stock=goog
/api/stock-prices?stock=goog&like=true
/api/stock-prices?stock=goog&stock=msft
/api/stock-prices?stock=goog&stock=msft&like=true
```

## Example return:

```
{"stockData":{"stock":"GOOG","price":"786.90","likes":1}}
{"stockData":[{"stock":"MSFT","price":"62.30","rel_likes":-1},{"stock":"GOOG","price":"786.90","rel_likes":1}]}
```

## Technologies

- Node
- Express
- Helmet
- Mocha-Chai
- Bootstrap
- javascript
- Html

## Project Structure:

```
├── assertion-analyser.js
├── controllers
│   └── stockHandler.js
├── db
│   └── mongoose.js
├── favicon.ico
├── models
│   └── stockModel.js
├── package.json
├── package-lock.json
├── public
│   ├── from.js
│   └── style.css
├── README.md
├── routes
│   ├── api.js
│   └── fcctesting.js
├── server.js
├── test-runner.js
├── tests
│   ├── 1_unit-tests.js
│   └── 2_functional-tests.js
└── views
    └── index.html
```

## Installing:

- clone this project
  - \$ git clone "https://github.com/avatarfreak/fcc-stock-price-checker.git"
  - \$ cd fcc-stock-price-checker
  - \$ npm install
  - \$ npm run start

### Project Demo:

- [FCC-Stock-Price-Checker](https://avatarfreak-fcc-stock-price-checker.glitch.me)

### Author:

- [avatarfreak](https://github.com/avatarfreak)
