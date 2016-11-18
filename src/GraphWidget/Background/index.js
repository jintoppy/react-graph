import React,{Component} from 'react';
import backgroundStyle from './index.css';
import Calc from '../calc';

const Background  = ({event,uiConfig}) => {
        let width = Calc.getColWidth(event, uiConfig.col);
        let colStyle = {
            width: `${width}%`
        };
        
        let noOfDays = Calc.getNoOfDays(event);

        let columns = new Array(noOfDays).fill().map((x, i) => {
            return (
                <div key={i} style={colStyle} className={backgroundStyle.dayCol}>
                
                </div>
            )
        });

        return (<div className={backgroundStyle.main}>
            <div style={{width: uiConfig.yAxisWidth}} className={backgroundStyle.yAxis}></div>
            <div className={backgroundStyle.colWrapper}>
                <div className={backgroundStyle.colScrollWrapper}>
                    {columns}
                </div> 
            </div>
        </div>)
} 

export default Background;