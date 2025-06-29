import React,{Component} from 'react';
import axios from 'axios';
import './index.css'
import { FaRegHeart } from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import olive_saree from '../../images/olive_saree.png'


class Women extends Component{
    constructor(props) {
        super(props);
        this.state = {
            women: [],
        };
      }
    
      componentDidMount() {
        axios
          .get('http://localhost:5000/api/women')
          .then((res) => {
            this.setState({ women: res.data });
          })
          .catch((err) => {
            console.error(err);
          });
      }
    render(){
        const { women } = this.state;
        return(
            <div className='container'>
                <div className='row'>
                {women.map((u) => (
                    <div className='col-lg-3 mb-1' id={u.id}>
                        <img src={u.image_location} alt={u.alt} className='img-fluid w-100 women-container m-2' />
                        <h2 className='text-center name'>{u.name}</h2>
                        <p className='text-center'>Rs. {u.price}</p>
                        <div className='d-flex justify-content-around'>
                          <button className='add-to-bag'>Add to bag</button>
                          <FaRegHeart className="icon-size"/>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        )
    }
}
export default Women