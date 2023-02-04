import { FastField, Form, FormikProps } from 'formik';
import { genderOptions, rankOptions } from 'utils/constants';

import { Button } from 'antd';
import InputField from 'components/Field/InputField';
import React from 'react';
import SelectField from 'components/Field/SelectField';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;
// const CreatePage: React.ComponentType<FormikProps<any>> = ({
//   handleSubmit,
//   handleChange,
//   handleBlur,
//   values,
//   errors,
// }) => (
//   <Form onSubmit={handleSubmit}>
//     <Grid>
//       {/* <button type="submit">Submit</button> */}
//       <FastField
//         name="name"
//         component={InputField}
//         label="Name"
//         placeholder="Enter your name"
//         validate
//       />
//       <FastField
//         name="age"
//         component={InputField}
//         label="Age"
//         type="number"
//         placeholder="Enter your age"
//       />
//       <FastField
//         name="gender"
//         component={SelectField}
//         label="Gender"
//         options={genderOptions}
//         placeholder="Select gender"
//       />
//       <FastField
//         name="nickname"
//         component={InputField}
//         label="Nickname"
//         placeholder="Enter your nickname"
//       />
//       <FastField
//         name="rank"
//         component={SelectField}
//         label="Rank"
//         options={rankOptions}
//         placeholder="Select rank"
//       />
//     </Grid>
//   </Form>
// );

// export default CreatePage;

const CreatePage = () => {
  return (
    <></>
    // <form onSubmit={handleSubmit}>
    // <Grid>
    //   <button type="submit">Submit</button>
    //   <FastField
    //     name="name"
    //     component={InputField}
    //     label="Name"
    //     placeholder="Enter your name"
    //     validate
    //   />
    //   <FastField
    //     name="age"
    //     component={InputField}
    //     label="Age"
    //     type="number"
    //     placeholder="Enter your age"
    //   />
    //   <FastField
    //     name="gender"
    //     component={SelectField}
    //     label="Gender"
    //     options={genderOptions}
    //     placeholder="Select gender"
    //   />
    //   <FastField
    //     name="nickname"
    //     component={InputField}
    //     label="Nickname"
    //     placeholder="Enter your nickname"
    //   />
    //   <FastField
    //     name="rank"
    //     component={SelectField}
    //     label="Rank"
    //     options={rankOptions}
    //     placeholder="Select rank"
    //   />
    // </Grid>
    // </form>
  );
};

export default CreatePage;
