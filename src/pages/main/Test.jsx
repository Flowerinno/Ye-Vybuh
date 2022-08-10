import './Test.css';
import {useState} from "react";
const Test = () => {
    const [className, setClassName] = useState('leftNavbar');

    const handleClick = () => {
        if (className === 'leftNavbar') {
            setClassName('leftNavbar--active');
        } else {
            setClassName('leftNavbar');
        }
    };

    return <div className={className} onClick={handleClick}>sosi</div>
}

export default Test;