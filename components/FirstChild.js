import React from "react"
import router from "next/router"
import { withRouter } from 'next/router'
import style from "../styles/style.module.css"

class FirstChild extends React.Component {
    render() {
            
            return (
                <div className={style.flexitem}>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                </div>
            );
        }
}

export default withRouter(FirstChild);