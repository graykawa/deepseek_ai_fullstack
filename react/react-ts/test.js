import dayjs from 'dayjs'

// console.log(dayjs().format());
// console.log(dayjs().format('YYYY-MM-DD'));
// console.log(dayjs('2023-01-01').format('YYYY-MM-DD'));
// // console.log(dayjs('2025-05-20').daysInMonth());
// console.log(dayjs('2024-11-1').startOf('month').format('YYYY-MM-DD'));
// console.log(dayjs('2024-11-1').endOf('month').format('YYYY-MM-DD'));

const rows = [] 
for (let i = 0; i < 6; i++) {
  const row = []
  for (let j = 0; j < 7; j++) {
    const item = days[i * 7 + j]  // {date: xxx, currentMounth: true}
    row[j] = <div className='calendar-month-body-cell'>{item.date.date()}</div>
  }
  rows.push(row)
}


rows = [
  [
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
  ],
  [
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
  ],
  [
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
  ],
  [
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
  ],
  [
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
  ],
  [
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
    '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
  ]
] 

rows.map((row) => {
  return <div className='calendar-month-body-row'>
      <div className='calendar-month-body-cell'>{item.date.date()}</div>,
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
  </div>
})


[
  <div className='calendar-month-body-row'>
      <div className='calendar-month-body-cell'>{item.date.date()}</div>,
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
  </div>,
  <div className='calendar-month-body-row'>
      <div className='calendar-month-body-cell'>{item.date.date()}</div>,
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
  </div>,
  <div className='calendar-month-body-row'>
      <div className='calendar-month-body-cell'>{item.date.date()}</div>,
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
      '<div className='calendar-month-body-cell'>{item.date.date()}</div>',
  </div>
]
