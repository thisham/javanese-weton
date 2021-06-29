import { getWeton } from "../index"

test("Should return weton of 29 June 2021 on Legi Tuesday", function () {
  let exampleDate = new Date(2021, 5, 29)
  expect(getWeton(exampleDate)).toEqual({
    date: "Tue Jun 29 2021",
    wetonName: {
      pancawara: "Legi",
      saptawara: "Tuesday",
    },
    wetonNumber: {
      pancawara: 0,
      saptawara: 3,
    },
  })
})

test("Should return weton of 01 January 2021 on Pahing Friday", function () {
  let exampleDate = new Date(2021, 0, 1)
  expect(getWeton(exampleDate)).toEqual({
    date: "Fri Jan 01 2021",
    wetonName: {
      pancawara: "Pahing",
      saptawara: "Friday",
    },
    wetonNumber: {
      pancawara: 1,
      saptawara: 6,
    },
  })
})

test("Should throw an error when year are less than 1901", function () {
  function convert() {
    let exampleDate = new Date(1583, 0, 1)
    getWeton(exampleDate)
  }
  expect(convert).toThrowError(
    "Only can get weton between 1900 AD. to 2100 AD."
  )
})

test("Should throw an error when year are more than 2099", function () {
  function convert() {
    let exampleDate = new Date(2132, 0, 1)
    getWeton(exampleDate)
  }
  expect(convert).toThrowError(
    "Only can get weton between 1900 AD. to 2100 AD."
  )
})

test("Should return weton of 17 August 1945 on Legi Friday", function () {
  let exampleDate = new Date(1945, 7, 17)
  expect(getWeton(exampleDate)).toEqual({
    date: "Fri Aug 17 1945",
    wetonName: {
      pancawara: "Legi",
      saptawara: "Friday",
    },
    wetonNumber: {
      pancawara: 0,
      saptawara: 6,
    },
  })
})

test("Should return weton of 11 August 1901 on Wage Sunday", function () {
  let exampleDate = new Date(1901, 7, 11)
  expect(getWeton(exampleDate)).toEqual({
    date: "Sun Aug 11 1901",
    wetonName: {
      pancawara: "Wage",
      saptawara: "Sunday",
    },
    wetonNumber: {
      pancawara: 3,
      saptawara: 1,
    },
  })
})
