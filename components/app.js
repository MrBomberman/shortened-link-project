import InputLink from "./input/inputLink";
import OutputLink from "./input/outputLink";
import fetchLink from "../utils/fetchUrl";
import styles from '../styles/Home.module.css';
import {useDispatch, useSelector} from "react-redux";
import { GET_SHORT_LINK, linkCreator } from "../store/linkReducer";
import { useRef, useState } from "react";

export default function App() {

    const [text, setText] = useState('');
    const refLink = useRef();

    const link = useSelector(state => state.linkReducer.link);
    const dispatch = useDispatch();
  
    function getData(longLink){
        fetchLink(longLink)
          .then(res => res.json())
          .then(res => dispatch({ type: GET_SHORT_LINK, payload: res.link }))
    }

    function copyValue(refShortLink){
        refShortLink.select();
        refShortLink.setSelectionRange(0, 99999); 
        navigator.clipboard.writeText(refShortLink.value);

        /* Alert the copied text */
        alert("Copied the text: " + refShortLink.value);
    }
    
    return (
      <div className={styles.container}>
        <h2>Shortened link</h2>
        <div className={styles.containerLink}>
            <InputLink  setText={(e) => setText(e.target.value)}/>
            <button className={styles.btnStyle} onClick={() => getData(text)}>Create</button>
        </div>
        <div className={styles.containerLink}>
            <OutputLink refLink={refLink}/>
            <button className={styles.btnStyle} onClick={() => copyValue(refLink.current)}>Copy</button>
        </div>
      </div>
    )
  }