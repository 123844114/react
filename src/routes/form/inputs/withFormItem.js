import React from 'react';
import classnames from 'classnames';
import { Row, Col } from 'antd';
import './FormItem.css';

/**
 * 包裹input组件， 体统通用的布局, 比如label, 错误信息等
 */
export default InputComponent => (props) => {
  const {
    label,
    field, // formik 给input传入的props, 包括value
    form, // form相关状态信息, 包括values, touched等
    className: classNameProp,
    ...other
  } = props;

  const error = form.errors[field.name];
  const touched = form.touched[field.name];
  return (
    <Row
      {...other}
      gutter={20}
      className={classnames(classNameProp, 'form-item', {
        'has-error': !!error && touched,
      })}
    >
      <Col span={8}>
        <label className="form-item-label">{label}:</label>
      </Col>
      <Col span={16}>
        <InputComponent id={field.name} {...field} />
      </Col>
      {!!error && touched && (
        <Col span={16} offset={8}>
          <div className="ant-form-explain">{error}</div>
        </Col>
      )}
    </Row>
  );
};
