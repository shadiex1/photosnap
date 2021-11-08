import React,{Component} from "react";
import styles from "./Home.module.scss";
import Menu from "../../Components/Menu/Menu"

class Home extends Component{
    state={

    }
    render(){
        return(
            <div className={styles.Home}>
                <Menu/>
            </div>
        )
    }
}

export default Home