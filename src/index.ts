type conversionResult = {
  date: string
  wetonName: {
    pancawara: string
    saptawara: string
  }
  wetonNumber: {
    pancawara: number
    saptawara: number
  }
}

const saptawaraList: Record<number, string> = {
  0: "Saturday",
  1: "Sunday",
  2: "Monday",
  3: "Tuesday",
  4: "Wednesday",
  5: "Thursday",
  6: "Friday",
}

const pancawaraList: Record<number, string> = {
  0: "Legi",
  1: "Pahing",
  2: "Pon",
  3: "Wage",
  4: "Kliwon",
}

function getGregorianDayOfTamYear(tamYear: number): number {
  let leapYearCycleRest = tamYear % 4
  let leapYearCycle = ((tamYear - leapYearCycleRest) / 4) * 1461
  leapYearCycleRest = leapYearCycleRest * 365
  let gregorianOfYear = leapYearCycle + leapYearCycleRest
  return gregorianOfYear
}

function isLeapYear(year: number): boolean {
  if (year % 400 == 0) return true
  if (year % 100 == 0) return false
  if (year % 4 == 0) return true
  return false
}

function countGregorianDayOfLeapMonth(month: number): number {
  const dayOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let gregorianDays = 0
  for (let index = 0; index < month; index++)
    gregorianDays = gregorianDays + dayOfMonth[index]

  return gregorianDays
}

function countGregorianDayOfCommonMonth(month: number): number {
  const dayOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let gregorianDays = 0
  for (let index = 0; index < month; index++)
    gregorianDays = gregorianDays + dayOfMonth[index]

  return gregorianDays
}

function getGregorianDayOfTamMonth(tamMonth: number, year: number): number {
  if (isLeapYear(year)) return countGregorianDayOfLeapMonth(tamMonth)
  return countGregorianDayOfCommonMonth(tamMonth)
}

function gregorianDate(year: number, month: number, day: number): number {
  let tamYear = year - 1
  let tamMonth = month - 1
  let date = getGregorianDayOfTamYear(tamYear)
  date = date + getGregorianDayOfTamMonth(tamMonth, year)
  date = date + day
  return date
}

function getPancawara(gregorianDate: number): number {
  return gregorianDate / 5
}

function getSaptawara(gregorianDate: number): number {
  return gregorianDate / 7
}

function getWeton(annoDominiDate: Date): conversionResult {
  let gregorianDays = gregorianDate(
    annoDominiDate.getFullYear(),
    annoDominiDate.getMonth(),
    annoDominiDate.getDate()
  )

  let calendaryDate = annoDominiDate.toDateString()
  let pancawara = getPancawara(gregorianDays)
  let saptawara = getSaptawara(gregorianDays)

  return {
    date: calendaryDate,
    wetonName: {
      pancawara: pancawaraList[pancawara],
      saptawara: saptawaraList[saptawara],
    },
    wetonNumber: {
      pancawara: pancawara,
      saptawara: saptawara,
    },
  }
}

export { getWeton }
