import './streamContainer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Tweet } from '../tweet/tweet';

function getBrowserDimensions() {
    return {
      width: (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth),
      height: (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)
    };
  }
  
const  browser_dims = getBrowserDimensions();

export function StreamContainer(props) {


    let tweets = props.tweets.map((tweet) => {

        return (
            <Container key={tweet.id} className="tweetContainer">
            <Tweet 
                name={tweet.user.name}
                screenName={tweet.user.screen_name}
                url={tweet.user.url}
                profileImgUrl={tweet.user.profile_image_url}
                text={tweet.text}
                
            />
            </Container>

        );
    })

    return(
        <div className="streambg" style={{tabIndex: 0, height: browser_dims.height - 125, marginBottom: 10}}>
            <h1 style={{fontSize: 30}}>Tweet Timeline</h1>
                {tweets}
            
        </div>
    );
}

