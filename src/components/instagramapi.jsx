
import React from 'react';
import axios from 'axios';

class Instagram extends React.Component {
    state = {
        images: [],
    };

    componentDidMount() {
        let token = 'access-token';
        let num_photos = 10;


        axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token + '&count=' + num_photos)
            .then(res => {
                console.log(res.data.data);
                this.setState({ images: res.data.data });
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {
        return(
            <div className="instafeed">
               
            </div>
        )
    }
}

export default Instagram;








// import React from 'react';
// import axios from 'axios';
// class Instagram extends React.Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//           images: []
//         }
//       }
//     componentDidMount() {
        

//         let token = 'IGQVJXenRiZA2dLVG9ieHdFTzE5c2RwS1oxNjRhcUhxc2VRSjNfWDR3UE9BWGZAuX1RWeVRrU2JtUTFwZAFV6cDBhMUR0UlJoWExSXzFxbE9SZAVJlWEZAZAYTJCUUQ1TWlqeGNVWmNraWJfSjIzRkw1QTN2YwZDZD';
//         let num_photos = 5;
//         //https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS-TOKEN
//         axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token + '&count=' + num_photos)
//         // axios.get('https://api.instagram.com/oauth/authorize ?client_id='+684477648739411 + '&redirect_uri=https://socialsizzle.herokuapp.com/auth/ &scope=user_profile,user_media &response_type=cod)
        
//         // axios.get("https://api.instagram.com/v1/users/self/?access_token=IGQVJXMWNKRDU4ZA3d2Rl9yWndUbUhES0t0NTBtUGZADZAXFBYzc2MHJjdkRENUxVU3phQ1lEa01fc1lzcGFYR1ViQjdsOXhZAanFWRG95UDMtZA1pBdWNsVDI3dnp4RlM4UDh6cFFJeDM3WmRTWWJPSVB6ZAgZDZ")
//             .then(res => {
//                 console.log("this is instaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
//                 console.log(JSON.stringify(res.data.data[0].images));
//                 console.log(res.data.data[0].images);
//                     this.setState({ images: res.data });
//             })
//             .catch(err => {
//                 console.log("this is instaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa errr");

//                 console.log(err)
//             })

//     }

//     render() {
//         return(
//             <div className="instafeed">
//                 this is insta
//                 { this.state.images.map((image) => {
//                     return <img src={image.images.thumbnail.url} />
//                 })}
//             </div>
//         )
//     }
// }

// export default Instagram;







// import React from 'react';
// import axios from 'axios';
// class Instagram extends React.Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//           images: []
//         }
//       }
//     componentDidMount() {
//         let token = 'IGQVJXenRiZA2dLVG9ieHdFTzE5c2RwS1oxNjRhcUhxc2VRSjNfWDR3UE9BWGZAuX1RWeVRrU2JtUTFwZAFV6cDBhMUR0UlJoWExSXzFxbE9SZAVJlWEZAZAYTJCUUQ1TWlqeGNVWmNraWJfSjIzRkw1QTN2YwZDZD';
//         let num_photos = 5;
//         //https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS-TOKEN
//         axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token + '&count=' + num_photos)
//         // axios.get("https://api.instagram.com/v1/users/self/?access_token=IGQVJXMWNKRDU4ZA3d2Rl9yWndUbUhES0t0NTBtUGZADZAXFBYzc2MHJjdkRENUxVU3phQ1lEa01fc1lzcGFYR1ViQjdsOXhZAanFWRG95UDMtZA1pBdWNsVDI3dnp4RlM4UDh6cFFJeDM3WmRTWWJPSVB6ZAgZDZ")
//             .then(res => {
//                 console.log("this is instaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
//                 console.log(JSON.stringify(res.data.data[0].images));
//                 console.log(res.data.data[0].images);
//                     this.setState({ images: res.data });
//             })
//             .catch(err => {
//                 console.log("this is instaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa errr");

//                 console.log(err)
//             })

//     }

//     render() {
//         return(
//             <div className="instafeed">
//                 this is insta
//                 { this.state.images.map((image) => {
//                     return <img src={image.images.thumbnail.url} />
//                 })}
//             </div>
//         )
//     }
// }

// export default Instagram










// bro the issue which we discuss is hanged is is throught error in console bcz the api key is not supported 
// i followed the same steps make and account , add instagram tester , and verification , approve tester , genrate token 
// i use another this which instagram embeded code which we get form instagram code and paste here in our code, it is showing the embeded thing which we get form instagram ... that code is use in our public file with same outlook of instagram post 
// tomorrow i will again work on it ... had sent a request for feeds api hopefully it will aprove 