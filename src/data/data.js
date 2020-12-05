const START_DATE = new Date(2020, 0, 1) // date of account creation
const END_DATE = new Date() // today's date

let allDays = []
for (let d = START_DATE; d <= END_DATE; d.setDate(d.getDate() + 1)) {
  allDays.push(new Date(d))
}
const contributionHistory = []

allDays.forEach((day) => {
  contributionHistory.push({
    date: day,
    contributions: [
      { name: 'GitHub', amount: Math.floor(Math.random() * Math.floor(15)) },
      { name: 'Gym', amount: Math.floor(Math.random() * Math.floor(2)) },
      { name: 'Read', amount: Math.floor(Math.random() * Math.floor(2)) },
    ],
  })
})

// console.log(contributionHistory)

const categories = [
  {
    name: 'GitHub',
    color: '1db954',
    max_granularity: 1, // ex. workout. If it is satisfying to do it every 3 days,
    // then max_granulatiry = 3 and will show as a 3-square-long line in the graph.
  },
  {
    name: 'Gym',
    color: '4100f5',
    max_granularity: 3,
  },
  {
    name: 'Read',
    color: 'ff8080',
    max_granularity: 2,
  },
]

export { contributionHistory, categories }
