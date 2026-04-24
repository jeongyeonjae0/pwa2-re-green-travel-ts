import { useNavigate, useParams } from 'react-router-dom';
import './StayShow.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { setStayInfo } from '../../store/slices/stayShowSlice';
import { useEffect } from 'react';

interface StayItem {
  contentid: string;
  title: string;
  tel?: string;
  firstimage?: string;
  addr1?: string;
  addr2?: string;
  [key: string]: any; 
}

interface LocalRootState {
  stay: {
    list: StayItem[];
  };
  stayShow: {
    stayInfo: StayItem;
  };
}

function StayShow() {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 

  const stayInfo = useSelector((state: LocalRootState) => state.stayShow.stayInfo);
  const stayList = useSelector((state: LocalRootState) => state.stay.list);

  useEffect(() => {
    const item = stayList.find(item => params.id === item.contentid);
    if (item) {
      dispatch(setStayInfo(item));
    }
  }, [params.id, stayList, dispatch]);

  function redirectBack(): void {
    navigate(-1);
  }

  return (
    <>
      { stayInfo && stayInfo.title &&
      <div className="stay-show-container">
        <button type="button" onClick={redirectBack}>되돌아가기</button>
        <p className="stay-show-title">{stayInfo.title}</p>
        <p className="stay-show-tel">{stayInfo.tel || '전화번호 없음'}</p>
        <img className="stay-show-img" src={stayInfo.firstimage} alt={`${stayInfo.title} 사진`} />
        <p className="stay-show-addr">{`${stayInfo.addr1 ?? ''}, ${stayInfo.addr2 ?? ''}`}</p>
      </div>
      }
    </>
  )
}

export default StayShow;