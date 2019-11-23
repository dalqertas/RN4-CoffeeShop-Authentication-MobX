import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

import { Button, Text } from "native-base";

// Stores
import authStore from "../../Stores/authStore";

const Logout = () => {
  return (
    <Button danger onPress={authStore.logout}>
      <Text>Log out!</Text>
    </Button>
  );
};

export default Logout;
