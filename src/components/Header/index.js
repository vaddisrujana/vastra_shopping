import React, { Component } from 'react';
import vastra from '../../images/vastra.png'
import './index.css'
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false, // Track hover state
            isHoveredMen:false
        };
    }

    // Event handlers for hover
    handleMouseEnter = () => {
        console.log('clicked')
        this.setState({ isHovered: true });
    };

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    };

    menMouseEnter = () => {
        console.log('clicked')
        this.setState({ isHoveredMen: true });
    };

    menMouseLeave = () => {
        this.setState({ isHoveredMen: false });
    };
    kidsMouseEnter = () => {
        console.log('clicked')
        this.setState({ isHoveredKids: true });
    };

    kidsMouseLeave = () => {
        this.setState({ isHoveredKids: false });
    };
    AccMouseEnter = () => {
        console.log('clicked')
        this.setState({ isHoveredAcc: true });
    };

    AccMouseLeave = () => {
        this.setState({ isHoveredAcc: false });
    };

    render(){
        const { isHovered } = this.state;
        const { isHoveredMen } = this.state;
        const { isHoveredKids } = this.state;
        const { isHoveredAcc } = this.state;
        return(
            <div className="nav-background row">
                <div style={{ position: "relative", display: "inline-block" }}>
                    {isHovered && (
                    <div 
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                        style={{
                            position: "fixed",
                            top: "30%",
                            left: "15%",
                            transform: "translate(-50%, -50%)",
                            backgroundColor: "#fff",
                            // color:"#001861",
                            fontFamily:'Lucida Handwriting',
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            borderRadius: "4px",
                            padding: "5px",
                            zIndex: 1000,
                        }}
                    >
                        <h4>Clothing</h4>
                            <p>Sarees</p>
                            <p>Dress</p>
                            <p>Kurta</p>
                            <p>Top</p>
                            <p>Jeans & Jeggings</p>
                       
                    </div>
                    )}
                </div>
                <div style={{ position: "relative", display: "inline-block" }}>
                    {isHoveredMen && (
                    <div 
                        onMouseEnter={this.menMouseEnter}
                        onMouseLeave={this.menMouseLeave}
                        style={{
                            position: "fixed",
                            top: "30%",
                            left: "20%",
                            transform: "translate(-50%, -50%)",
                            backgroundColor: "#fff",
                            // color:"#001861",
                            fontFamily:'Lucida Handwriting',
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            borderRadius: "4px",
                            padding: "5px",
                            zIndex: 1000,
                        }}
                    >
                        <h4>Clothing</h4>
                            <p>Shirts</p>
                            <p>T-Shirt</p>
                            <p>Jeans</p>
                            <p>Formal Wear</p>
                            <p>Hoddies & Sweatshirts</p>
                       
                    </div>
                    )}
                </div>
                <div style={{ position: "relative", display: "inline-block" }}>
                    {isHoveredKids && (
                    <div 
                        onMouseEnter={this.kidsMouseEnter}
                        onMouseLeave={this.kidsMouseLeave}
                        style={{
                            position: "fixed",
                            top: "33%",
                            left: "26%",
                            transform: "translate(-50%, -50%)",
                            backgroundColor: "#fff",
                            // color:"#001861",
                            fontFamily:'Lucida Handwriting',
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            borderRadius: "4px",
                            padding: "5px",
                            zIndex: 1000,
                        }}
                    >
                        <h4>Girls</h4>
                            <p>Frocks</p>
                            <p>T-Shirt</p>
                            <p>Jeans</p>
                        <h4>Boys</h4>
                            <p>T-Shirt</p>
                            <p>Jeans</p>
                       
                    </div>
                    )}
                </div>
                <div style={{ position: "relative", display: "inline-block" }}>
                    {isHoveredAcc && (
                    <div 
                        onMouseEnter={this.AccMouseEnter}
                        onMouseLeave={this.AccMouseLeave}
                        style={{
                            position: "fixed",
                            top: "20%",
                            left: "35%",
                            transform: "translate(-50%, -50%)",
                            backgroundColor: "#fff",
                            // color:"#001861",
                            fontFamily:'Lucida Handwriting',
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            borderRadius: "4px",
                            padding: "5px",
                            zIndex: 1000,
                        }}
                    >
                        <h3>Accessories</h3>
                        <p>Watches</p>
                        <p>Sun Glasses</p>
                       
                    </div>
                    )}
                </div>
                <img src={vastra} alt='vastra logo' className="logo col-lg-4" />
                <div className="category mt-2 col-lg-4 d-flex justify-content-around align-items-center">
                    <div onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave} 
                    style={{
                        cursor: "pointer",
                    }}>
                    <p>Women</p>
                    </div>
                    <div
                    onMouseEnter={this.menMouseEnter}
                    onMouseLeave={this.menMouseLeave} 
                    style={{
                        cursor: "pointer",
                    }}>
                        <p>Men</p>
                    </div>
                    <div
                    onMouseEnter={this.kidsMouseEnter}
                    onMouseLeave={this.kidsMouseLeave} 
                    style={{
                        cursor: "pointer",
                    }}>
                        <p>Kids</p>
                    </div>
                    <div onMouseEnter={this.AccMouseEnter}
                    onMouseLeave={this.AccMouseLeave} 
                    style={{
                        cursor: "pointer",
                    }}>
                        <p>Accessories</p>
                    </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                    <input type="text" className="search-input w-75 mb-2" placeholder='search for products......'/>
                    <IoIosSearch className='search-icon'/>
                </div>
                <div className="category col-lg-1 d-flex justify-content-between align-items-center">
                    <CgProfile className="icon-size"/>
                    <FaRegHeart className="icon-size"/>
                    <BsHandbag className="icon-size"/>
                </div>
            </div>
        )
    }
}

export default Header

