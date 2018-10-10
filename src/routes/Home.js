import React,{Component} from 'react';
import { Row, Col, Card } from 'antd';
import Axios from 'axios';
const { Meta } = Card;
//设置card模板
function CardMobel(props) {
    let {image,info,sales}=props.options;
    console.log(props.options.image)
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={require("../"+props.options.image)} />}
        >
            {/* <Meta
                title={`每日新歌：${info}`}
                description={`播放量：${sales}+万`}
            /> */}
            <div style={{textAlign:'left'}}>
                <a href="https:www.baidu.com">{info}</a>
                <p>播放量：{sales}万</p>
            </div>
        </Card>
    )
}

class Home extends Component{
    constructor(props){
        super(props);
        this.state={data:[]}
    }
    componentWillMount(){
        Axios.get('http://localhost:3000/home').then(({data})=>{
            console.log(data)
            this.setState({data:data})
        })
    }
    render(){
        let {data} = this.state;
        console.log(data)
        return (
            <div className="gutter-example">
                <Row gutter={0}>
                    {
                        data.map((v,k)=>{
                            return (
                                <Col className="gutter-row" span={4} key={k}>
                                  <CardMobel options={v}/>,
                                </Col>)
                        })
                    }
                </Row>
            </div>
        );
    }
}
export default Home;
