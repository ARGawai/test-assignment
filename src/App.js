import React from 'react';
import { Button, Col, Card, Tooltip, Row, Divider } from 'antd';
import { Link,withRouter } from 'react-router-dom';
import { compose, graphql, withApollo } from 'react-apollo'
import './css/custom.css'
import HeaderComp from '../src/components/home/header'
import ListComp from '../src/components/home/tableList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource:[],
      loading:false,
      height:500
    };
  }
  enterLoading = ()=>{
    this.setState({loading:true})
}
  componentDidMount(){
    let height = window.screen.height
    // console.log("hieght",height)
   
    this.setState({
    loading:false,
    height:height
  });
        
    }
  render(){
    
  return (
    <Row gutter={16} style={{margin:0}}>
      <HeaderComp/>
      <Divider/>
      <ListComp/>
      {/* <div className="home-content">

    </div> */}
  </Row>

    
  )
  }
   
}
export default withRouter(withApollo(App));
