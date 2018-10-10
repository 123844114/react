import React, { PureComponent } from 'react';
import {
  Input,
  Button,
  Modal,
} from 'antd';

class MapInput extends PureComponent {
  state = {
    visible: false,
  }

  handleShowMap = () => {
    this.setState({
      visible: true,
    });
  }

  handleSelectMap = (value) => {
    this.setState({
      visible: false,
    });
    this.props.onChange({
      target: {
        value,
        // https://github.com/jaredpalmer/formik#handlechange-e-reactchangeeventany--void
        // formik onChange方法 是根据input元素的name或id来区分字段的, 所以需要指定
        name: this.props.name,
      },
    });
  }

  render() {
    const {
      value,
      onChange,
      onBlur,
      ...other
    } = this.props;
    const { visible } = this.state;
    return (
      <div>
        <Input value={value} onChange={onChange} onBlur={onBlur} {...other} />
        <Button onClick={this.handleShowMap}>点我选择</Button>
        <Modal visible={visible}>
          <Button onClick={this.handleSelectMap.bind(null, '设置inputValue')}>设置inputValue</Button>
        </Modal>
      </div>
    );
  }
}

export default MapInput;
