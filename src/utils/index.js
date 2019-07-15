function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function getNowHour (date) {
  const hour = date.getHours()
  return `${hour}`
}

export function getNowDay (date) {
  const month = date.getMonth() + 1
  const day = date.getDate()

  const t1 = [month, day].map(formatNumber).join('-')
  return `${t1}`
}
// 当前时间加减几天
export function getTwoDate (date, int) {
  let d1 = date
  let d2 = new Date(date)
  d2.setDate(d1.getDate() + int)
  const month = d2.getMonth() + 1
  const day = d2.getDate()
  const t1 = [month, day].map(formatNumber).join('-')
  return `${t1}`
}

export function getDeList (date) {
  let list = []
  for (let i = 0; i < 7; i++) {
    list.push(getTwoDate(date, i))
  }
  return list
}

export default {
  formatNumber,
  formatTime,
  getNowHour,
  getNowDay,
  getTwoDate,
  getDeList
}
