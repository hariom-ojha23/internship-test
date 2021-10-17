import fetch from 'node-fetch'
import Data from './models/data.js'

let fetchData = []

const getData = async () => {
  await fetch('https://api.wazirx.com/api/v2/tickers')
    .then((res) => res.json())
    .then((res) => {
      fetchData = Object.keys(res)
        .slice(0, 10)
        .map((key) => ({ [key]: res[key] }))
    })
    .catch((err) => console.log(err))
}

const addData = async () => {
  try {
    await getData()
    await fetchData.map((obj) => {
      Object.values(obj).map((i) => {
        let test_data = {
          name: i.name,
          last: i.last,
          buy: i.buy,
          sell: i.sell,
          volume: i.volume,
          base_unit: i.base_unit,
        }

        Data.findOne({ name: i.name })
          .then((res) => {
            if (res == null) {
              Data.insertMany(test_data)
            }
          })
          .catch((error) => {
            console.log(`Error: ${error.message}`)
          })
      })
    })
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}

export default addData
