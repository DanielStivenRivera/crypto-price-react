import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react'
import TableCoins from './Components/TableCoins';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
<<<<<<< HEAD
  const [page, setPahe] = useState(1);
  //Some chage can't be created

  const getData = async () => {
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1`);
=======
  const [page, setPage] = useState(1);

  const getData = async () => {
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${page}`);
>>>>>>> 74a397b4b0b533ae29557ba0c344605e6aecc229
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
        <div>
          <label>Page number</label>
          <button onClick={e => setPage(e.target.value)}>1</button>
          <button onClick={e => setPage(e.target.value)}>2</button>
          <button onClick={e => setPage(e.target.value)}>3</button>
          <button onClick={e => setPage(e.target.value)}>4</button>
          <button onClick={e => setPage(e.target.value)}>5</button>
        </div>
        <TableCoins coins={coins} search={search}/>
      </div>
      <h3>Powered by Daniel Stiven Rivera</h3>
    </div>
  );
}

export default App;
