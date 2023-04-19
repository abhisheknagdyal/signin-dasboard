import Chart from "../chart/chart.component";
import TodaySchedule from "../today-schedule/today-schedule.component";
import "./chart-schedule.css"

function ChartSchedule(){
    return(
        <div className="chart-schedule-conatiner">
            <Chart/>
            <TodaySchedule/>
        </div>
    )
}

export default ChartSchedule;

