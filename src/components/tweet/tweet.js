import { Container, Row, Col } from 'react-bootstrap';
import './tweet.css';


export function Tweet(props){

    const tweet = (
       <div className='tweetBorder'> 
            <div style={{flex: 1}} >
            <img src={props.profileImgUrl} alt={props.name} className="profileImg" />

            </div>
            
            <div style={{flex: 1, flexGrow: 5}} className="tweetText">

                <span className='tweetName'>{props.name} </span>
                <span className='tweetSN' >@{props.screenName}</span><br />
                {props.text}

            </div>
        </div>

    );


    return tweet;
}