
import React from 'react';
import axios from 'axios';
class InstagramNewAPI extends React.Component {
    state = {
        images: [],
    };
    componentDidMount() {
    const url='https://www.instagram.com/graphql/query/?query_hash=d4d88dc1500312af6f937f7b804c68c3&variables={"id":"3434187583","first":"12"}';        

    async function getPosts() {
    const data=await fetch(url).then(res=> res.json());
    console.log("this is instagram new feeds data");
    console.log(JSON.stringify(data));
    return data;
    }   
    getPosts();
    // exports.handler = async function(event,context,callback){
    //     const posts= await getPosts();
    //     callback(null,{
    //         statusCode:200,
    //         body: JSON.stringify(posts),
    //     });
    // }
    }

    render() {
        return(
            <div className="instafeed">
               this is instafeeeds
            </div>
        )
    }
}

export default InstagramNewAPI;