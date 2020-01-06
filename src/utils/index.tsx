export const getDayNameFromYearMonthDay = (year: number, month: number, day: number): string => {
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = week[new Date(year, month, day).getDay()]
    return dayOfWeek
}