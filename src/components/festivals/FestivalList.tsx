import { useEffect, useCallback } from 'react';
import './FestivalList.css';
import useFestivalStore from '../../store/useFestivalStore';
import { dateFormatter } from '../../utils/dateFormatter';

function FestivalList() {
  const {
    festivals,
    page,
    scrollEventFlg,
    fetchFestivals, 
    setScrollEventFlg 
  } = useFestivalStore();

  useEffect(() => {
    fetchFestivals(1);
  }, [fetchFestivals]);

  const addNextPage = useCallback(() => {
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const nowHeight = Math.ceil(window.scrollY);
    const viewHeight = docHeight - winHeight;

    if (viewHeight <= nowHeight && scrollEventFlg) {
      setScrollEventFlg(false);
      fetchFestivals(page + 1);
    }
  }, [page, scrollEventFlg, fetchFestivals, setScrollEventFlg]);

  useEffect(() => {
    window.addEventListener('scroll', addNextPage);
    return () => {
      window.removeEventListener('scroll', addNextPage);
    };
  }, [addNextPage]);

  return (
    <>
      <div className="container">
        {festivals.map((item) => (
          <div className="card" key={`${item.contentid}-${item.eventstartdate}`}>
            <div 
              className="card-img" 
              style={{ backgroundImage: `url('${item.firstimage || '기본이미지주소'}')` }}
            ></div>
            <p className='card-title'>{item.title}</p>
            <p className="card-period">
              {dateFormatter.withHyphenYMD(item.eventstartdate)} ~ {dateFormatter.withHyphenYMD(item.eventenddate)}
            </p>
          </div>
        ))}
      </div>
      
      {scrollEventFlg && (
        <button type="button" onClick={() => fetchFestivals(page + 1)}>
          더보기
        </button>
      )}
    </>
  );
}

export default FestivalList;