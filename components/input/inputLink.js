import classes from './input.module.css';

export default function InputLink({setText}){
    return (
            <input placeholder="Type your link..." className={classes.inputStyle}
            onChange={setText} type='email'></input>
    )
}