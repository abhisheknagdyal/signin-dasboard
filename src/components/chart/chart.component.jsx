import './chart.styles.css';
import {Pie, PieChart, ResponsiveContainer} from "recharts";
import dropdown from "./pie.assets/dropdown.svg";

const pieValues = [
    {name: "1", value: 38, fill : '#F6DC7D'},
    {name: "2", value: 18, fill : '#EE8484'},
    {name: "3", value: 44, fill: '#98D89E'},
];

function Chart(){
    return(
        <div className='pie-chart-container'>
            <div className='pie-chart-heading'>
                <p className='pie-chart-title'>Top products</p>
                <p className='pie-chart-date'>May - June 2021 <img src={dropdown} alt="" /></p>
            </div>
            <div className='chart-container'>
            <ResponsiveContainer className='pie-chart'>
                    <PieChart >
                        <Pie data={pieValues} dataKey={pieValues.value}/>
                    </PieChart>
            </ResponsiveContainer>
            <div className='legends'>
                    <div className='legend-value'>
                        <div className='legend-circle'
                             style={{backgroundColor: '#98D89E'}}>
                        </div>
                        <div>
                            <p>Basic Tees</p>
                            <small
                                style={{fontWeight: '400',
                                        fontFamily: 'Lato, sans-serif',
                                        color: '#858585'}}>
                                55%
                            </small>
                        </div>
                    </div>
                    <div className='legend-value'>
                        <div className='legend-circle'
                             style={{backgroundColor: '#F6DC7D'}}>
                        </div>
                        <div>
                            <p>Custom Short Pants</p>
                            <small
                                style={{fontWeight: '400',
                                        fontFamily: 'Lato, sans-serif',
                                        color: '#858585'}}>
                                31%
                            </small>
                        </div>
                    </div>
                    <div className='legend-value'>
                        <div className='legend-circle'
                             style={{backgroundColor: '#EE8484'}}>
                        </div>
                        <div>
                            <p>Super Hoodies</p>
                            <small
                                style={{fontWeight: '400',
                                        fontFamily: 'Lato, sans-serif',
                                        color: '#858585'}}>
                                14%
                            </small>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default Chart;