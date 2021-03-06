import classes from "./Input.modules.css";

const Input = props => {
    return <div className={classes.input}>
        <label hmtlFor={props.input.id}>
            {props.label}
        </label>
        <input {...props.input} />
        
    </div>
}

export default Input;