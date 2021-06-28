import { getWeton } from "../index"

test("Should return date from Date() object", function () {
  let exampleDate = new Date()
  expect(getWeton(exampleDate))
    .toEqual(exampleDate)
})
