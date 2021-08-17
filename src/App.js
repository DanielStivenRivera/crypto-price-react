import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react'
import TableCoins from './Components/TableCoins';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async () => {
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1`);
    setCoins(res.data);
  }

  useEffect(() => {
    getData()
  }, [])
 
  return (
    <div className="container">
      <div className="row">
        <input type="text" placeholder="search coin" className="form-control bg-dark text-light border-0 mt-4 text-center"
        onChange={e => setSearch(e.target.value)} />
        <TableCoins coins={coins} search={search}/>
      </div>
      <h3>Powered by Daniel Stiven Rivera</h3>
    </div>
  );
}

export default App;
