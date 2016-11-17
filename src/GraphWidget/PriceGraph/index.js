import React,{Component} from 'react';
import priceGraphStyle from './index.css';

export default class PriceGraph extends Component {
    render(){
        return (<div className={priceGraphStyle.main}>
            This is the price graph
        </div>)
    }
} 