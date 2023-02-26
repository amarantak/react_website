import './Card.css';

const Card = (props) => (
        <div class="card">
            <img src={props.image} alt={props.text}/>
            <h4>Title</h4>
            <h5>Author</h5>
        </div>
);

export default Card;