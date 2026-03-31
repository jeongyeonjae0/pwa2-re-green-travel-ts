import { useNavigate, useParams } from "react-router-dom";
import './FestivalShow.css';
import { useDispatch, useSelector } from "react-redux";
import { dateFormatter } from "../../utils/dateFormatter";
import { setFestivalInfo } from "../../store/slices/festivalShowSlice.ts";
import { useEffect } from "react";

// Festival 타입 정의 (실제 API에 맞게 수정 추천)
interface Festival {
  contentid: string;
  title: string;
  eventstartdate: string;
  eventenddate: string;
  firstimage: string;
  addr1: string;
  addr2: string;
}

// RootState 타입 (store에서 가져오는 게 가장 좋음)
interface RootState {
  festivalShow: {
    festivalInfo: Partial<Festival>;
  };
  festival: {
    list: Festival[];
  };
}

function FestivalShow() {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const festivalInfo = useSelector(
    (state: RootState) => state.festivalShow.festivalInfo
  );

  const festivalList = useSelector(
    (state: RootState) => state.festival.list
  );

  useEffect(() => {
    if (!params.id) return;

    const item = festivalList.find(
      (item) => params.id === item.contentid
    );

    if (item) {
      dispatch(setFestivalInfo(item));
    }
  }, [params.id, festivalList, dispatch]);

  const redirectBack = () => {
    navigate(-1);
  };

  return (
    <>
      {festivalInfo.title && (
        <div className="show-container">
          <button type="button" onClick={redirectBack}>
            되돌아가기
          </button>

          <p className="show-title">{festivalInfo.title}</p>

          <p className="show-period">
            {dateFormatter.withHyphenYMD(festivalInfo.eventstartdate!)} ~{" "}
            {dateFormatter.withHyphenYMD(festivalInfo.eventenddate!)}
          </p>

          <img
            className="show-img"
            src={festivalInfo.firstimage}
            alt={`${festivalInfo.title}사진`}
          />

          <p className="show-addr">
            {`${festivalInfo.addr1}, ${festivalInfo.addr2}`}
          </p>
        </div>
      )}
    </>
  );
}

export default FestivalShow;