import React from 'react';
import {FiLink} from 'react-icons/fi'
import LinkItem from '../../components/LinkItem';
import Menu from '../../components/menu/menu';
import './home.css'
import api from '../../services/api'
import { saveLink} from '../../services/storeLinks'

function Home() {

const [link, setLink] = React.useState('');
const [showModal, setShowModal] = React.useState(false);
const [data, setData] = React.useState({});

async function handleShortLink () {
try {
  const response = await api.post('/shorten', {
    long_url: link
  })
  setData(response.data);
  setShowModal(true);
  saveLink('@encurtalinks', response.data);
  setLink('');

}catch{
  alert("Ops! Parece que algo deu errado.");
  setLink('');
}
}

    return (
      <div className="container-home">
       <div className="logo">
         <img src="/logo.png" alt="Link logo" />
         <h1>EncurtaLink</h1>
         <span>Cole seu link para encurtar👇</span>
         </div>

         <div className="area-input">
           <div>
            <FiLink  size={24} color="#FFF"/>
            <input
            placeholder='Cole seu link aqui...'
            value={link}
            onChange= {(event) => setLink(event.target.value)}
            />
           </div>
           <button onClick={handleShortLink}>Encurtar Link</button>
         </div>
        <Menu/>

        {showModal && (<LinkItem closeModal = {()=> setShowModal(false)} content={data}/>)}
       </div>
    );
  }
  
  export default Home;
  