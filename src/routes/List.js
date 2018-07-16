import React,{Component} from 'react';
import axios from 'axios';
import { Table, Icon, Divider } from 'antd';
  
 class List extends Component {
     constructor(props){
         super(props)
         this.state={data:[]}
     }

     componentWillMount(){
        axios.get('http://localhost:3000/list',{
                    params: {
                      id: 12345
                    }
                  }).then(({data})=>{
                    console.log(data);
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
  }, {
    title: '时间',
    dataIndex: 'addtime',
    key: 'addtime',
  }, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="">Action 一 {record.name}</a>
        <Divider type="vertical" />
        <a href="">Delete</a>
        <Divider type="vertical" />
        <a href="" className="ant-dropdown-link">
          More actions <Icon type="down" />
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

    
