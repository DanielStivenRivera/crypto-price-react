import './App.css';
import axios from 'axios';
import React, {useEffect, useState, updateState} from 'react'
import TableCoins from './Components/TableCoins';


function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [currency, setCurrency] = useState('eur');
  //Some chage can't be created

  const getData = async () => {
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1`);
    setCoins(res.data);
  }

  const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    getData()
  }, [])

  const changeCurrency = (e) => {
    const currencyList = document.getElementById("currencyList");
    var value = currencyList.options[currencyList.selectedIndex].value;
    setCurrency(value);
    getData();
    
  }
	
  return (
    <div className="container">
      <div className="row">
        <input type="text" placeholder="search coin" className="form-control bg-dark text-light border-0 mt-4 text-center"
        onChange={e => setSearch(e.target.value)} />
        <br/>
        <div style={{marginTop: "15px", display: "flex", justifyContent: "space-between"}}>
          <label className="mr-4">short by currency</label>
          <select className="" id="currencyList" onChange={e => {changeCurrency(e)}}>
            <option>usd</option>
            <option>jpy</option>
            <option>eur</option>
          </select>
        </div>
        <TableCoins coins={coins} search={search} currency={currency}/>
      </div>
      <h3>Powered by Daniel Stiven Rivera</h3>
    </div>
  );
}

export default App;
