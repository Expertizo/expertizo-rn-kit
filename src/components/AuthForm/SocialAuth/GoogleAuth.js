import React from "react";
import { Button } from "react-native";
import { Google } from "expo";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import {
  androidClientId,
  androidStandaloneAppClientId,
  iosClientId
} from "../../../config";
import { loginAction } from "../../../store/actions/auth.action";

/**
|--------------------------------------------------
| Google Auth Component, maybe not working on IOS 😢 Responsible for google login/signup
|--------------------------------------------------
*/

const signInWithGoogleAsync = async props => {
  // console.log("func google login");
  try {
    const result = await Google.logInAsync({
      androidClientId,
      // androidStandaloneAppClientId,
      iosClientId,
      scopes: ["profile", "email"]
    });
    console.log('result>>>', result)
    if (result.type === "success") {
      console.log("Result>>>>>", result);
      props.login();
      return props.navigation.navigate("HomeScreen");
    } else {
      console.log("Result>>>>>", result);
      return { cancelled: true };
    }
  } catch (e) {
    console.log("error", e);
    return { error: true };
  }
};

export const GoogleAuthWithNav = withNavigation(props => {
  return (
    <Button title="Google Login" onPress={() => signInWithGoogleAsync(props)} />
  );
});

// const mapStateToProps = state => ({
//   userStatus: state.authReducer.userStatus
// });

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(loginAction({ userStatus: true }))
  };
};

export const GoogleAuth = connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(GoogleAuthWithNav);
