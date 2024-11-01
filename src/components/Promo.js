function Promo(props) {
  const style = {
    color: "orange",
    fontSize: "40px",
  };

  return (
    <div className="promo-section">
      <div>
        <h1 style={style}>{props.heading}</h1>
      </div>
      <div>
        <h2>{props.promoSubHeading}</h2>
      </div>
    </div>
  );
}
