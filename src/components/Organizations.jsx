export default function Organizations(props) {
  return (
    <>
      <img className={props.styleImg} src={props.img}></img>
      <h1 className={props.styleTitle} >{props.title}</h1>
      <p className={props.styleText}>{props.text}</p>
    </>
  );
}
