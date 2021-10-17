import fetch from 'node-fetch'

let data = []

const getData = async () => {
  await fetch('https://api.wazirx.com/api/v2/tickers')
    .then((res) => res.json())
    .then((res) => {
      data = Object.keys(res)
        .slice(0, 10)
        .map((key) => ({ [key]: res[key] }))
    })
    .catch((err) => console.log(err))

  //console.log(data)
}

export default getData
