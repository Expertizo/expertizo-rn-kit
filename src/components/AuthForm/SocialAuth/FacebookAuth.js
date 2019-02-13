import React from "react";
import { Button } from "react-native";
import { Facebook } from "expo";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { APP_ID } from "../../../config";
import { loginAction } from "../../../store/actions/auth.action";

/**
|--------------------------------------------------
| Facebook Auth Component, Responsible for facebook login/signup
|--------------------------------------------------
*/

const facebookLoginAsync = async props => {
  console.log("helllo fb losignup props");
  try {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      APP_ID,
      {
        permissions: ["public_profile"]
      }
    );
    if (type === "success") {
      // Get the user's data using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      );

      (await response) && props.login();
      return props.navigation.navigate("HomeScreen");
    } else {
      // type === 'cancel'
      console.log("Cancel");
      // Alert.alert(`Plz logged In first`);
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
};

export const FacebookAuthWithNav = withNavigation(props => {
  return <Button onPress={() => facebookLoginAsync(props)} title="FB Login" />;
});

// const mapStateToProps = state => ({
//   userStatus: state.authReducer.userStatus
// });

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(loginAction({ userStatus: true }))
  };
};

export const FacebookAuth = connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(FacebookAuthWithNav);
