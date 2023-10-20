import React from "react"
import router from "next/router"
import { withRouter } from 'next/router'
import style from "../styles/style.module.css"
import FirstChild from "../components/FirstChild.js"
import CollapsibleButton from "../components/CollapsibleButton"

class Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: false
        };
        this.setValue = this.setValue.bind(this);
    }

    setValue(val) {
        this.setState({
            collapsed: !val
        }, () => {

        })
    }

    render() {
            
        return (
            <div className={style.columns}>
                <div className={style.sidebar} style={{ width: this.state.collapsed === false ? '250px' : '50px' }}>
                    <div className={style.collapsebutton}><CollapsibleButton setValue={this.setValue} /></div>

                </div>
                <div className={style.content} style={{ width: this.state.collapsed === false ? 'calc(100% - 250px)' : 'calc(100% - 50px)' }}>
                    <div className={style.rowflex}>
                        <FirstChild />
                        <FirstChild />
                        <FirstChild />
                        <FirstChild />
                    </div>
                </div>
            </div>
            );
        }
    }

export default withRouter(Parent);