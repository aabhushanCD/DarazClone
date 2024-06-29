import style from "./gridBox.module.css";
import Item from "./grid_item";
import details from "./details.json";

function GridBox() {
  return (
    <>
      <div style={{ padding: "82px" }}>
        <h2>Categories</h2>
        <div className={style.box}>
          {details.map((item, index) => (
            <div key={index}>
              <Item detail={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GridBox;
