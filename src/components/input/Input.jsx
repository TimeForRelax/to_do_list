import './Input.css'

export const Input = (props) => {

    return <input name='input' value={props.value} onChange={props.onChange} onKeyDown={props.onKeyDown} className="input"/>
}