import React from 'react';
import { Button, Col, Card, Tooltip, Row ,Menu ,Divider ,Dropdown , Icon} from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined ,MenuUnfoldOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

// import img from '../../img'


class HeaderComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  showDropdown=()=>{
    return (
        <Menu>
            <Menu.Item>
            <a  rel="noopener noreferrer" href="#">
            <span  className='logout'>&nbsp;&nbsp;Menu 1</span>

                </a>
            </Menu.Item>
            <Divider style={{margin:'9px 0'}}/>
            <Menu.Item>
            <a  rel="noopener noreferrer" href="#">
            <span  className='logout'>&nbsp;&nbsp;Menu 2</span>

                </a>
            </Menu.Item>
            
        </Menu>
    )
}


  render(){
    
  return (
    <div className="header-content">
      <Row gutter={16} style={{margin:0}}>
       <div style={{display:'flex',justifyContent:'space-between'}}>
        <span >
            <img
              src={require("../../img/Logo_For-Dark.png")} align="center"
                  style={{ width: '200px', height: 'auto'}}
                /></span>
                <Dropdown overlay={this.showDropdown} placement="bottomLeft" style={{ backgroundColor: 'white' }}>
                    <Button  block style={{ width: 'fit-content' ,height:'60px',background: 'transpant'}}>
                        <span class="sub-main-content"><strong><MenuUnfoldOutlined/> Menu with submenu  </strong></span>
                    </Button>
                </Dropdown>
        </div>
      </Row>

    </div>
    
  )
  }
   
}
export default HeaderComp;
