# Weton
An NPM package for getting javanese weton from a gregorian date.

## Getting Started
:construction: This package is under development.

<!-- ```bash
# Installing the Package

$ npm install @thisham/weton
# ... or using yarn ...
$ yarn add @thisham/weton
``` -->

## Usage on Typescript

We will get the weton of Dec, 21st 2012. Which the day placed on Wage Friday. So, the usage can be formed like this:
```ts
import { getWeton } from '@thisham/weton'

// Set the gregorian date ...
let gregorianDate = new Date(2012, 11, 21)

// ... then, get the weton.
console.log(getWeton(gregorianDate))
```

## Output
The code was typed on Usage Section's output will formed as JSON, like this:
```json
{
  "date": "Dec, 21 2012",
  "weton": {
    "saptawara": 6,
    "pancawara": 3
  }
}
```

The _saptawara_ are forming weekly day from Sunday as 1st day until Saturday as 7th day.
1. Sunday;
2. Monday;
3. Tuesday;
4. Wednesday;
5. Thursday;
6. Friday;
7. Saturday.

The _pancawara_ are forming Javanese pancawara day from Pahing as 1st day until Legi as 5st day.
1. Pahing;
2. Pon;
3. Wage;
4. Kliwon;
5. Legi.
