import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store";
import { AppNavigator } from "./src/navigation";
import { Loading } from "./src/components/Loading";
import { firebaseConfig } from "./src/config";
import * as firebase from "firebase";

/**
 |--------------------------------------------------
 | Main App with Redux provider, redux-persist PeristGate, persisitor and Firebase 🔥 Initialization
 |--------------------------------------------------
 */

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
