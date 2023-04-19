import "./line-graph.styles.css"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import dropdown from "./line.assets/dropdown.svg";

 const lineValue = [
    {name: '', A: 200, B: 100},
    {name: 'Week 1', A: 400, B: 420},
    {name: 'Week 2', A: 200, B: 150},
    {name: 'Week 3', A: 300, B: 450},
    {name: 'Week 4', A: 220, B: 240},
    {name: '', A: 420, B: 220}
];

function LineGraph(){
    return(
        <div className="line-graph-container">
            <div className="line-graph-headings">
                <div>
                    <p className="line-chart-title">Activites</p>
                    <p className="line-chart-date">May - June 2021 <img src={dropdown} alt="" /></p> 
                </div>
                <div className="line-lables">
                    <div className="guest">
                        <div className="pink"></div>
                        Guest
                    </div>
                    <div className="user">
                        <div className="green"></div>
                        User
                    </div>
                </div>
            </div>
            <ResponsiveContainer width='100%' height={150}>
                <LineChart
                    data={lineValue}
                    margin={{left: -30}}>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} fontFamily={'Lato, sans-serif'} fontSize={'12px'}/>
                        <YAxis tickCount={100} interval={19} axisLine={false} tickLine={false} fontFamily={'Lato, sans-serif'} fontSize={'12px'}/>
                        <CartesianGrid stroke="#EAEAEA" vertical={false}/>
                        <Line type="monotone" dataKey="A" stroke="#E9A0A0" strokeWidth={3} dot={false}/>
                        <Line type="monotone" dataKey="B" stroke="#9BDD7C" strokeWidth={3} dot={false}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default LineGraph;
