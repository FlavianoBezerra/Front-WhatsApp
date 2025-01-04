import './App.css';
import Img from './assets/profissao-programador.jpg'

function App() {
  return (
    <div className="container">
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
      </div>
    </div>
  );
}

export default App;
