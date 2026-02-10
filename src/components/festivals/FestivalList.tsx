import { useEffect } from 'react';
import './FestivalList.css';
import useFestivalStore from '../../store/useFestivalStore';

function FestivalList() {
  const { festivals, fetchFestivals, isLoading, error } = useFestivalStore();

  useEffect(() => {
    fetchFestivals();
  }, [fetchFestivals]);

  if (isLoading) return <div className="loading">데이터를 불러오는 중입니다...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="container">
      {festivals.map((festival) => (
        <div className="card" key={festival.contentid}>
          <div 
            className="card-img" 
            style={{
              backgroundImage: `url(${festival.firstimage || 'https://via.placeholder.com/300x200?text=No+Image'})`
            }}
          ></div>
          <p className='card-title'>{festival.title}</p>
          <p className="card-period">
            {festival.eventstartdate} ~ {festival.eventenddate}
          </p>
        </div>
      ))}

      {festivals.length === 0 && <p>등록된 축제 정보가 없습니다.</p>}
    </div>
  );
}

export default FestivalList;