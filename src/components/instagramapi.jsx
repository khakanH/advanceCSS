import React from 'react';
import axios from 'axios';
class Instagram extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
          images: []
        }
      }
    componentDidMount() {
        let token = 'IGQVJXMWNKRDU4ZA3d2Rl9yWndUbUhES0t0NTBtUGZADZAXFBYzc2MHJjdkRENUxVU3phQ1lEa01fc1lzcGFYR1ViQjdsOXhZAanFWRG95UDMtZA1pBdWNsVDI3dnp4RlM4UDh6cFFJeDM3WmRTWWJPSVB6ZAgZDZ';
        let num_photos = 5;
        //https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS-TOKEN
        axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token + '&count=' + num_photos)
        // axios.get("https://api.instagram.com/v1/users/self/?access_token=IGQVJXMWNKRDU4ZA3d2Rl9yWndUbUhES0t0NTBtUGZADZAXFBYzc2MHJjdkRENUxVU3phQ1lEa01fc1lzcGFYR1ViQjdsOXhZAanFWRG95UDMtZA1pBdWNsVDI3dnp4RlM4UDh6cFFJeDM3WmRTWWJPSVB6ZAgZDZ")
            .then(res => {
                console.log("this is instaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
                console.log(JSON.stringify(res.data.data[0].images));
                console.log(res.data.data[0].images);
                    this.setState({ images: res.data });
            })
            .catch(err => {
                console.log("this is instaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa errr");

                console.log(err)
            })

    }

    render() {
        return(
            <div className="instafeed">
                this is insta
                { this.state.images.map((image) => {
                    return <img src={image.images.thumbnail.url} />
                })}
            </div>
        )
    }
}

export default Instagram;

