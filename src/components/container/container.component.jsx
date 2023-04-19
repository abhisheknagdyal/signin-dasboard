import CardContainer from "../card-container/card-conatiner.component";
import Info from "../info/info.componet";
import LineGraph from "../line-graph/line-graph.component";
import ChartSchedule from "../chart-schedule/chart-schedule";
import "./container.styles.css";

function Container(){
    return(
        <div className="changeables">
            <Info/>
            <CardContainer/>
            <LineGraph/>
            <ChartSchedule/>
        </div>
    );
}

export default Container;
