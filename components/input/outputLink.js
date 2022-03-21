import classes from './input.module.css';
import { useSelector } from 'react-redux';

export default function OutputLink({refLink}){

    const link = useSelector(state => state.linkReducer.link);

    return (
        <input ref={refLink} className={classes.inputStyle}  value={link} readOnly></input>
    )
}