import React from 'react';
import axios from 'axios';

class Instagram extends React.Component {
    state = {
        images: [],
    };
    componentDidMount() {   
        const url=`https://www.instagram.com/graphql/query/?query_hash=d4d88dc1500312af6f937f7b804c68c3&variables={"id":"3434187583","first":"12"}`;        
        async function getPosts() {
        const data=await fetch(url).then(res=> res.json());
        console.log("this is instagaram new feeds data");
        console.log(JSON.stringify(data));
      
        }
        getPosts();
        // axios.get(`https://www.instagram.com/graphql/query/?query_hash=d4d88dc1500312af6f937f7b804c68c3&variables={"id":"3434187583","first":"12"}`)
        //     .then(res => {
        //         console.log("this is response block:::::::::::::::")
        //         console.log(JSON.stringify(res));
        //     })
        //     .catch(err => {
        //         console.log("this is error block::::::::::::::: ")
        //     })
    }
    render() {
        return(
            <div className="instafeed">
               this is instafeeeds
            </div>
        )
    }
}

export default Instagram;


// import React from 'react';
// import axios from 'axios';

// class Instagram extends React.Component {
//     state = {
//         images: [],
//     };

//     componentDidMount() {
//         let token = 'IGQVJVdGZAFWTN2LThrbEs4ZADF5MDV6WlpkZA1RVYlBORVRMSFVWX1N6akRuNFdrcUdVdzExMUpwUXhWOFowbVJ6YkJoZA3NGcGEzTmZA3VTFsbXBfTXZAKTWo0dTEzTEJlRE1IME10RktHV2paR1l4RGlkQgZDZD';
//         let num_photos = 10;


//         //axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token + '&count=' + num_photos)
//         axios.get('https://api.instagram.com/v1/tags/wordcamp/media/recent?client_id='+729177927829420+'&count=30')
        
//             .then(res => {
//                 console.log("this is response block:::::::::::::::")
//                 console.log(res.data.data);
//                 this.setState({ images: res.data.data });
//             })
//             .catch(err => {
//                 console.log("this is error block::::::::::::::: ")
//             })

//     }

//     render() {
//         return(
//             <div className="instafeed">
//                this is instafeeeds
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










