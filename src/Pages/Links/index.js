import React from 'react'
import './links.css'
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {getLinkSave, deleteLink} from '../../services/storeLinks' 
import LinkItem from '../../components/LinkItem'


function Links() {

  const [myLinks, setMyLinks] = React.useState([]);
  const [data, setData] = React.useState({});
  const [showModal, setShowModal] = React.useState(false);
  const [empytList, setEmpytList] = React.useState(false)
 
React.useEffect (() => {
  async function getLinks() {
    const result = await getLinkSave('@encurtalinks')

    if(result.lenght === 0){
      setEmpytList(true);
    }
    setMyLinks(result);
  }
  getLinks();

},[])

function handleOpenLink (){
 setData(Link);
 setShowModal(true);
}

async function handleDelete (id) {
const result = await deleteLink(myLinks, id);

if(result.lenght === 0){
  setEmpytList(true);
}
setMyLinks(result);
}

    return (
      <div className="links-container">
        <div className='links-header'>
          <Link to="/">
          <FiArrowLeft size={38} color="#FFF"/>
          </Link>
          
          <h1>Meus Links</h1>
        </div>
        {empytList && ( 
        <div className='links-item'> 
        <h2 className='empty-text'>Sua lista está vazia...</h2>
        </div>
        )}
        {myLinks.map (Link => (<div key={Link.id} className='links-item'>
          <button className='link' onClick={()=> handleOpenLink(Link)}>
            <FiLink size={18} color="#FFF" /> {Link.long_url}</button>
            <button className='link-delete' onClick={() => handleDelete (Link.id)}>
              <FiTrash size={24} color="#FF5454" />
            </button>
        </div>))}

        {showModal && (<LinkItem closeModal={() => setShowModal(false)} content={data} />)}
      </div>
    );
  }
  
  export default Links;
  