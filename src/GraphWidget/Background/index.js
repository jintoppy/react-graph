import React,{Component} from 'react';
import backgroundStyle from './index.css';
import Calc from '../calc';

export default class Background extends Component {
    render(){

        let width = Calc.getColWidth(this.props.noOfDays, this.props.minColWidth);
        let colStyle = {
            width: `${width}%`
        };
        let columns = new Array(this.props.noOfDays).fill().map((x, i) => {
            return (
                <div key={i} style={colStyle} className={backgroundStyle.dayCol}>
                
                </div>
            )
        });

        let totalWidth = width * this.props.noOfDays;

        let colScrollWrapperStyle = {
            width: `${width * this.props.noOfDays}%`
        }
        

        return (<div className={backgroundStyle.main}>
            <div style={{width: this.props.yAxisWidth}} className={backgroundStyle.yAxis}></div>
            <div className={backgroundStyle.colWrapper}>
                <div className={backgroundStyle.colScrollWrapper}>
                    {columns}
                </div> 
            </div>
        </div>)
    }
} 