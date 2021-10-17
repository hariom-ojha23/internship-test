// global variable data
let data = []
const table = document.getElementById('table-body')

// fetching data from database
const getData = async () => {
  try {
    const response = await fetch('http://localhost:5000/data')
    data = await response.json()
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}

// creating tr element and appending table rows in table
const putDataInTable = async () => {
  await data.slice(0, 5).forEach((res, index) => {
    const el = document.createElement('tr')
    el.innerHTML = `
        <td>${index + 1}</td>
        <td>${res.name}</td>
        <td>${'&#8377; ' + res.last}</td>
        <td>${'&#8377; ' + res.buy + ' / ' + '&#8377; ' + res.sell}</td>
        <td>${res.volume}</td>
        <td>${res.base_unit}</td>
        `
    table.appendChild(el)
  })
}

const start = async () => {
  try {
    // calling getData function
    await getData()

    // putting data in table
    await putDataInTable()
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}

start()
