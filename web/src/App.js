import React, {useState,useEffect}from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {

  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

 useEffect(() => {
   navigator.geolocation.getCurrentPosition(
     (position) => {
       const{latitude, longitude} = position.coords;

       setLatitude(latitude);
       setLongitude(longitude);
     },
     (err) => {
       console.log(err);
     },
     {
       timeout: 30000,
     }
   )
 },[]);  

// TODO: Fazer requisição a API
 async function handleAddDev(e){
   e.preventDefault();
 }

  return (
    <div id="app">
      <aside>
        <strong>Cadastar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
          />
          </div>
          
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
          />
          </div>    

          <div className="input-group">
            
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required 
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
           
            <div className="input-block">
              <label htmlFor="longitude">Logitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required 
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>  

          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/29169142?s=400&v=4" alt="Moisés Martins"/>
              <div className="user-info">
                <strong>Moise Martins Nascimento</strong>
                <span>Flutter, Dart, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedor Flutter e eapaixonado pro novas Tecnologias</p>
            <a href="https://github.com/mmden"> Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/29169142?s=400&v=4" alt="Moisés Martins"/>
              <div className="user-info">
                <strong>Moise Martins Nascimento</strong>
                <span>Flutter, Dart, Node.js</span>
              </div>
            </header>
            <p>Desenvolvedor Flutter e eapaixonado pro novas Tecnologias</p>
            <a href="https://github.com/mmden"> Acessar perfil no Github</a>
          </li>

        </ul>
      </main>
    </div>
  );
}

export default App;
