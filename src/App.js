import { useEffect, useState } from 'react';
import './App.css';
import Img from './assets/profissao-programador.jpg';
import SendIcon from './assets/send.png';
import socket from 'socket.io-client';

const io = socket('http://localhost:4000');

function App() {
  const [ name, setName  ] = useState("");
  const [ joined, setJoined ] = useState(false);
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    io.on("users", (users) => setUsers(users));
  }, []);

  const handleJoin = () => {
    if(name){
      io.emit( "join", name );
      setJoined(true);
    }
  }

  if(!joined){
    return (
      <div>
        <span>Digite seu nome</span>
        <input value={name} onChange={(e) => setName( e.target.value )} />
        <button onClick={() => handleJoin()}>Entrar</button>
      </div>
    )
  }

  return (
    <div className='container'>
      <div className='back-ground'></div>
      <div className='chat-container'>
        <div className='chat-contacts'>
          <div className='chat-options'></div>
          <div className='chat-item'>
            <img src={Img} alt='' className='image-profile' />
            <div className='title-chat-container'>
              <span className='title-message'>NetWorking Profissão Programador</span>
              <span className='last-message'>Flaviano: Bom dia!</span>
            </div>
          </div>
        </div>

        <div className='chat-messages'>
          <div className='chat-options'>
            <div className='chat-item'>
              <img src={Img} alt='' className='image-profile' />
              <div className='title-chat-container'>
                <span className='title-message'>NetWorking Profissão Programador</span>
                <span className='last-message'>
                  {users.map((user, index) => (
                    <span>{user.name}{index + 1 < users.length? ', ' : ''}</span>
                  ))}
                </span>
              </div>
            </div>
          </div>

          <div className='chat=messages-area'></div>
          <div className='chat-input-area'>
            <input type='text' className='chat-input' placeholder='Digite sua mensagem...' />
            <img className='send-message-icon' src={SendIcon} alt='' />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
