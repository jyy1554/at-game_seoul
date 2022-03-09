import { connect } from "react-redux";
import ShowScore from "../components/ShowScore";

function mapReduxStateToReactProps(state){
    return {
        score:state.score
    }
}

export default connect(mapReduxStateToReactProps)(ShowScore);