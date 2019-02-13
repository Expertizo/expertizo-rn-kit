import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import * as firebase from "firebase";
import { styles } from "../styles";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { signoutAction } from "../../store/actions/auth.action";

/**
|--------------------------------------------------
| Home screen with signout button, 😃
|--------------------------------------------------
*/

class HomeWithNav extends Component {
  signout = async () => {
    await this.props.signout();
    await firebase.auth().signOut();
    return this.props.navigation.navigate("LoginScreen");
  };

  render() {
    // console.log("userStatus>>>", this.props.userStatus);
    return (
      <View style={styles.container}>
        <Text style={styles.fonts}> 🏠 Home </Text>
        <Button title="Signout" onPress={() => this.signout()} />
      </View>
    );
  }
}

// const mapStateToProps = state => ({
//   userStatus: state.authReducer.userStatus
// });

const mapDispatchToProps = dispatch => {
  return {
    signout: () => dispatch(signoutAction({ userStatus: false }))
  };
};

export const Home = connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(withNavigation(HomeWithNav));
