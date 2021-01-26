import React from 'react';
// import moment from 'moment';
// import Loader from 'react-loader-spinner';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class FriendsList extends React.Component{
    state = {
        friends:[]
    };

    componentDidMount(){
        this.getData();
    }

    getData = () =>{
        axiosWithAuth()
        .get('/friends')
        .then((res)=>{
            console.log("data: ", res.data);
 
            this.setState({
                friends: res.data
            });
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    render(){
        return(
            <div>
                Friends List
                <p>{this.state.friends.map(f=>{
                    return <p>{f.name}</p>
                })}</p>
            </div> 
        )
    }
    
}

export default FriendsList;