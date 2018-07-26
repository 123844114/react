import React,{Component} from 'react';
import axios from 'axios';
import { Table, Divider } from 'antd';
  
 class List extends Component {
     constructor(props){
         super(props)
         this.state={data:[]}
     }

     componentWillMount(){
        axios.get('http://localhost:3000/list').then(({data})=>{
                    this.setState({data:data});
                })
     }

     render(){
 const columns = [{
 title: '歌名',
    dataIndex: 'mname',
     key: 'mname',
     render: text => <a href="">{text}</a>,
 }, {
    title: '歌手',
    dataIndex: 'singer',
    key: 'singer',
  }, {
    title: '图片',
    dataIndex: 'image',
    key: 'image',
    render:(text, record)=>(
      <img src={require('../'+text)} alt = '' style={{width:'40px', height:'40px'}}/>
    ),
  }, {
    title: '时间',
    dataIndex: 'addtime',
    key: 'addtime',
  }, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="">删除</a>
        <Divider type="vertical" />
        <a href="">
          编辑
        </a>
      </span>
    ),
  }];
  
  const {data} = this.state
         return(
            <Table columns={columns} dataSource={data} rowKey={(r,i)=>(i)}/>
         )
     }

 }
 export default List;

    
