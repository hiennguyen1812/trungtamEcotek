// import "./SearchItem.css";

const SearchItem = (props) => {
  return (
    <div className="search-item-container">
      <div className="search-item__inner">
        <div className="search-item__title">{props.MaCSDT}</div>
        <div className="search-item__date">{props.MaSoGTVT}</div>
        <div className="search-item__overview">{props.LoaiDV}</div>
        <div className="search-item__title">{props.TenCSDT}</div>
        <div className="search-item__date">{props.CoQuanQuanLy}</div>
        <div className="search-item__overview">{props.DienThoai}</div>
        <div className="search-item__date">{props.DiaChi}</div>
      </div>
    </div>
  );
};

export default SearchItem;
