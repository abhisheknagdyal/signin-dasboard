import arrow from "./today.assets/arrow.svg"

import "./today-schedule.styles.css";


function TodaySchedule(){
    return(
        <div className="today-schedule-container">
            <div className="today-schedule-head">
                <p className="heading">Today's schedule</p>
                <p className="arrow-text">See All <span className="arrow"><img src={arrow} alt="" /></span></p>
            </div>

            <div className="schedules top">
                <div className="bar-green"></div>
                <div>
                    <p className="schedule-head">Meeting with suppliers from Kuta Bali</p>
                    <p className="time">14.00-15.00</p>
                    <p className="address">at Sunset Road, Kuta, Bali </p>
                </div>
            </div>

            <div className="schedules">
                <div className="bar-purple"></div>
                <div>
                    <p className="schedule-head">Check operation at Giga Factory 1</p>
                    <p className="time">18.00-20.00</p>
                    <p className="address">at Central Jakarta</p>
                </div>
            </div>
        </div>
    );
}

export default TodaySchedule;
