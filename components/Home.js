import React from "react"
import router from "next/router"
import { withRouter } from 'next/router'
import style from "../styles/style.module.css"

class Home extends React.Component {
    render() {

        return (
            <div className={style.flexitem}>
                <h1>Home</h1>
            </div>
        );
    }
}

export default withRouter(Home);