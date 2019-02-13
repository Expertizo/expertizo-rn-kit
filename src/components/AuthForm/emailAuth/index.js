import React from "react";
import { Button, TextInput, View, Text } from "react-native";
import { Formik, ErrorMessage } from "formik";
import { connect } from "react-redux";
import * as firebase from "firebase";
import { loginAction, signupAction } from "../../../store/actions/auth.action";

/**
|--------------------------------------------------
| Password/Email Authentication form with Formik 😃
|--------------------------------------------------
*/

/* Validates the form fields */
const hasValid = values => {
  let errors = {};
  let { email, password } = values;
  if (!email) {
    errors.email = "Email is required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = "Invalid email address";
  }
  if (!password) {
    errors.password = "Password is required!";
  } else if (/^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*)$/i.test(password)) {
    errors.password =
      "Password has to be at least 8 characters, one letter and one number";
  }
  return errors;
};

export const EmailAuthWithNav = props => {
  const { isSignup } = props;

  const login = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        return res && props.login();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const signup = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        return res && props.signup();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={hasValid}
      onSubmit={values => {
        const { email, password } = values;
        isSignup ? signup(email, password) : login(email, password);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <View>
          <TextInput
            placeholder="Email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            autoCorrect={false}
            keyboardType="email-address"
            autoFocus={isSignup && true}
            textContentType="emailAddress"
            enablesReturnKeyAutomatically={true}
            blurOnSubmit={false}
            onSubmitEditing={() => this.password.focus()}
          />
          <ErrorMessage name="email" component={Text} />

          <TextInput
            placeholder="Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            secureTextEntry
            textContentType="password"
            enablesReturnKeyAutomatically={true}
            returnKeyType="done"
            onSubmitEditing={handleSubmit}
            ref={input => (this.password = input)}
          />
          <ErrorMessage name="password" component={Text} />

          <Button
            onPress={handleSubmit}
            title={isSignup ? "Signup" : "Login"}
          />
        </View>
      )}
    </Formik>
  );
};

// const mapStateToProps = state => ({
//   userStatus: state.authReducer.userStatus
// });

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(loginAction({ userStatus: true })),
    signup: () => dispatch(signupAction({ userStatus: true }))
  };
};

export const EmailAuth = connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(EmailAuthWithNav);
