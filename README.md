## MercadoLibre MockUp API
This is a mock up JSON API, of [MercadoLibre](https://mercadolibre.com.ar).
This API allows you to search for real products, and get complete descriptions of a product.

## Live demo
Check a live demo [here](https://mercadolibre-mockup-api.herokuapp.com/).

## Web App
Check the [MercadoLibre MockUp project here](https://github.com/jjant/mercadolibre_mockup).

## Docs
This API has two endpoints:

`/items?q=:query`
Returns an array of objects with the following schema:
```javascript
{
  "items": [
    {
      "id": String,
      "title": String,
      "price": {
        "currency": String,
        "amount": Number,
        "decimals": Number
      },
      "picture": String,
      "condition": String,
      "free_shipping": Boolean
    }
  ]
}
```

`/item/:id`
Returns an object with the following schema:
```javascript
{
  "item": {
    "id": String,
    "title": String,
    "price": {
      "currency": String,
      "amount": Number,
    },
    "picture": String,
    "condition": String,
    "free_shipping": Boolean,
    "sold_quantity": Number,
    "description": String
  }
}
```

## Notes
Some fields in the spec were not obtainable from the current (real) MercadoLibre API, and thus they were left out of the served JSONs.

## Try it yourself
```bash
# Clone it
git clone https://github.com/jjant/mercadolibre_mockup_api.git && cd mercadolibre_mockup_api
# Install dependencies
npm install
# Run it, development mode
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
