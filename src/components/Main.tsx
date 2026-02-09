import { useNavigate } from 'react-router-dom';
import titleImg from '../assets/andong_tal.png';
import './Main.css';

function Main() {
  const navigate = useNavigate();

  const handleImageClick = (): void => {
    navigate('/festivals');
  };

  return (
    <>
      <img 
        className='title-img' 
        onClick={handleImageClick} 
        src={titleImg} 
        alt="대문" 
      />
    </>
  );
}

export default Main;