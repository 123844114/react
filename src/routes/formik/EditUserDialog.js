// EditUserDialog.js
import React from 'react';
import Dialog from 'MySuperDialog';
import { Formik, Field, Form } from 'formik';

const EditUserDialog = ({ user, updateUser, onClose }) => {
  return (
    <Dialog onClose={onClose}>
      <h1>Edit User</h1>
      <Formik
        initialValues={user /** { email, social } */}
        onSubmit={(values, actions) => {
            alert('提交')
        //   CallMyApi(user.id, values).then(
        //     updatedUser => {
        //       actions.setSubmitting(false);
        //       updateUser(updatedUser), onClose();
        //     },
        //     error => {
        //       actions.setSubmitting(false);
        //     //   actions.setErrors(transformMyAPIErrorToAnObject(error));
        //     }
        //   );
        }}
        render={({ errors, touched, isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <Field type="text" name="social.facebook" />
            {errors.social.facebook &&
              touched.social.facebook && <div>{errors.social.facebook}</div>}
            <Field type="text" name="social.twitter" />
            {errors.social.twitter &&
              touched.social.twitter && <div>{errors.social.twitter}</div>}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      />
    </Dialog>
  );
};