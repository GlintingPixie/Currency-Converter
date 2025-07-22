import {useEffect, useState} from 'react'

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`)
    .then((res)=>res.json())
    .then((res)=>setData(res[currency]))
    .catch((err)=>console.error("Error Currency Not Found"))
  }, [currency]);

  return data; // Return the fetched exchange rate data
}

export default useCurrencyInfo;