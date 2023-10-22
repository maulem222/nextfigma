import React from "react"
import router from "next/router"
import { withRouter } from 'next/router'
import style from "../styles/style.module.css"
import FirstChild from "../components/FirstChild.js"
import CollapsibleButton from "../components/CollapsibleButton"
import Home from "../components/Home"
import Products from "../components/Products"
import AboutUs from "../components/About Us"
import Contact from "../components/Contact"

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
            route: '/home'
        };
        this.setValue = this.setValue.bind(this);
        this.handleRouteChange = this.handleRouteChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    setValue(val) {
        this.setState({
            collapsed: !val
        }, () => {

        })
    }

    handleRouteChange = (url) => {
        this.setState({
            route: url
        }, () => {
               // alert(url);
        })
    }

    handleClick = (path) => {
        if (path === "/home") {
            this.handleRouteChange(path)
        }
        if (path === "/products") {
            this.handleRouteChange(path)
        }
        if (path === "/aboutus") {
            this.handleRouteChange(path)
        }
        if (path === "/contact") {
            this.handleRouteChange(path)
        }
    }

    componentDidMount() {

    }

    render() {
            
        return (
            <div>
                <div className={style.header}>
                    <div className={style.menubox}>
                        <div className={style.menuitem} onClick={() => this.handleClick("/home")}>Home</div>
                        <div className={style.menuitem} onClick={() => this.handleClick("/products")}>Products</div>
                        <div className={style.menuitem} onClick={() => this.handleClick("/aboutus")}>About Us</div>
                        <div className={style.menuitem} onClick={() => this.handleClick("/contact")}>Contact</div>
                    </div>
                </div>
                <div className={style.columns}>
                    <div className={style.sidebar} style={{ width: this.state.collapsed === false ? '250px' : '50px' }}>
                        <div className={style.collapsebutton}><CollapsibleButton setValue={this.setValue} /></div>
                    </div>
                    <div className={style.content} style={{ width: this.state.collapsed === false ? 'calc(100% - 250px)' : 'calc(100% - 50px)' }}>
                        <div className={style.rowflex}>
                            {(this.state.route === "/home") && <Home />}
                            {(this.state.route === "/products") && <Products />}
                            {(this.state.route === "/aboutus") && <AboutUs />}
                            {(this.state.route === "/contact") && <Contact />}
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }

export default withRouter(Index);