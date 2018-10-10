import React from 'react';
import { Input, Button } from 'antd';
import { withFormik, Field } from 'formik';
import MapInput from './inputs/MapInput';
import withFormItem from './inputs/withFormItem';
import { required, chain, email } from './validators';
import styles from './Form.m.css';

const InputFormItem = withFormItem(Input);
const MapInputFormItem = withFormItem(MapInput);

const BasicForm = (props) => {
  const {
    handleSubmit,
    isSubmitting,
  } = props;
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Field label="账户名" name="username" component={InputFormItem} validate={required('账户名')} />
      <Field label="emial" name="email" component={InputFormItem} validate={chain(required('email'), email)} />
      <Field label="map" name="map" component={MapInputFormItem} validate={chain(required('map'), email)} />
      <div className={styles['btn-wrapper']}>
        <Button htmlType="submit" disabled={isSubmitting}>创建账户</Button>
      </div>
    </form>
  );
};


export default withFormik({
  // 相当于初始化values, user是通过props传入
  mapPropsToValues: ({ user }) => ({ ...user }),
  handleSubmit: (payload, { setSubmitting }) => {
    // console.log(payload);
    setSubmitting(false);
  },
  enableReinitialize: true,
})(BasicForm);
