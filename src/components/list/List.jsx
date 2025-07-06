import './List.css'

export const List = (props) => {
  return <ul className="ul">{props.list.map((el) => <li>{el}</li>)}</ul>
}