import React,{Component} from 'react';
import graphWidgetStyle from './index.css';
import Background from './Background';
import Tier from './Tier';
import PriceGraph from './PriceGraph';
import Footer from './Footer';


export default class GraphWidget extends Component{
    render(){
        return (
            <div className={graphWidgetStyle.main}>                
                <Background {...this.props} />
                <Tier {...this.props} />
                <PriceGraph {...this.props} />
                <Footer {...this.props} />
            </div>
        )
    }
}