import React from 'react';
import { Button, Col, Card, Tooltip, Row ,Input ,Divider ,Table ,Modal ,Form, message} from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined ,MenuUnfoldOutlined } from '@ant-design/icons';
import {dataSource } from './data'


class ListComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data:dataSource,
        visible:false,
        editRecord:null,
        loading:false
    };
  }

  enterLoading = ()=>{
    this.setState({loading:true})
}

  onEdit=(record)=>{
        this.setState({
            visible:true,
            editRecord:record,
        })

        this.props.form.setFieldsValue({
          name:record.name,
          userName:record.userName,
          email:record.email
        })
  }

  handleSubmit=(e)=>{
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      this.enterLoading()
      // console.log('val',values)
      let editRecord=this.state.editRecord
      let array1 = this.state.data
      let i = array1.findIndex(x => x.id == editRecord.id)
      array1[i]={
        id: editRecord.id,
        name:values.name,
        userName: values.userName,
        email: values.email,
      }
      
      // console.log('i',array1)

      this.setState({
        data: array1,
        editRecord:null,
        visible:false,
        loading:false
      })
      message.success('Record Updated Successfully')
    })
  }


  render(){

const columns = [
    {
        title: 'Sr. No.',
        dataIndex: 'id',
        key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Username',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
       title:'Action',
       key:"action",
      render:(record,text) => (
        // console.log('record,text',record,text)
        <div onClick={()=>this.onEdit(record)}>
          <a>Edit</a>
        </div>
        )
    }
  ];
  const { getFieldDecorator } = this.props.form; 
  const { editRecord ,data }=this.state
  // console.log('editRecord',editRecord)
  return (
    <div className="home-content">
      <Row gutter={16} style={{margin:0}}>
            <Table dataSource={data} columns={columns} />
      </Row>
      <Modal
          title="Edit"
          visible={this.state.visible}
        //   onOk={this.handleOk}
          onCancel={()=>{
              this.setState({
                  visible:false
              })
          }}
         footer={false}
        >
          <Form  onSubmit={this.handleSubmit}>
          <Form.Item label="Name">
          {getFieldDecorator('name', {
            
            rules: [
              
              {
                required: true,
                message: 'Please input your name!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Username">
          {getFieldDecorator('userName', {
          
            rules: [
            
              {
                required: true,
                message: 'Please input your userName',
              },
            ],
          })(<Input />)}
        </Form.Item>
          <Form.Item label="Email">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item >
        <div style={{float:'right'}}>
        <Button type="primary" htmlType="submit" style={{marginRight:'5px'}}>
            Save
          </Button>
        <Button type="primary" onClick={()=>{
              this.setState({
                  visible:false
              })
          }}>
            Cancel
          </Button>
          
          </div>
        </Form.Item>
          </Form> 
        </Modal>
    </div>
    
  )
  }
   
}

const WrappedListComp = Form.create({ name: 'register' })(ListComp);

export default WrappedListComp;


