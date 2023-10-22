import React from "react"
import router from "next/router"
import { withRouter } from 'next/router'
import style from "../styles/style.module.css"

class Contact extends React.Component {
    render() {

        return (
            <div className={style.flexitem}>
                <h1>Contact</h1>
            </div>
        );
    }
}

export default withRouter(Contact);