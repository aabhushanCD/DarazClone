import style from "./grid_item.module.css";

function Item({ detail }) {
  return (
    <a href="/" style={{ textDecoration: "none", color: "black", fontFamily:"Roboto" }}>
      <div className={style.item}>
        <img src={detail.image} alt={detail.name} />
        <h6
          style={{ marginTop: "8px", marginLeft: "12px", marginRight: "12px" }}
        >
          {detail.name}
        </h6>
      </div>
    </a>
  );
}

export default Item;
