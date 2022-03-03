import logo from './logo.svg';
import './App.css';
import react, {useState} from 'react'
import axios from 'axios'

function App() {
  const [SearchText, setSearchText] = useState("");
  const API_KEY = 'RGAPI-33b6ed55-0f9a-4a96-a38d-d84e9480c40d';
  const [playerData, setPlayerData] = useState({});

  function searchForPlayer(event){
    var APICallString = 'https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+SearchText+ '?api_key=' + API_KEY
    axios.get(APICallString).then(function(response){
      setPlayerData(response.data);
    }).catch(function(error){

    })
  }



  return (
    <div className="App">
      <div className='container'>
          <h5>League of Legends player Shearsher</h5>
          <input type='text' onChange={e => setSearchText(e.target.value)}></input>
          <button onClick={e => searchForPlayer(e)}>search</button>
      </div>
      {JSON.stringify(playerData) !== '{}' ?
      <>
          <p>{playerData.name}</p>
          <img width='100' heigth='100' src={'http://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/'+ playerData.profileIconId + '.png'}></img>
          <p>Summoner Level {playerData.summonerLevel}</p>
      </>
       :
      <><p>no player data</p></>
      }
    </div>
  );
}

export default App;
