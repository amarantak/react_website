import './Header.css';

const Header = (props)=>{
    return(
    <div>   
        <h2>{props.heading}</h2>
        <br></br>
        <p>{props.text}</p>
        <br></br>
        <br></br>
    </div>
    );
}

export default Header;