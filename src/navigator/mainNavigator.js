import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Tutorial217187Navigator from '../features/Tutorial217187/navigator';
import NotificationList217159Navigator from '../features/NotificationList217159/navigator';
import Settings217158Navigator from '../features/Settings217158/navigator';
import Settings217150Navigator from '../features/Settings217150/navigator';
import UserProfile217148Navigator from '../features/UserProfile217148/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Tutorial217187: { screen: Tutorial217187Navigator },
NotificationList217159: { screen: NotificationList217159Navigator },
Settings217158: { screen: Settings217158Navigator },
Settings217150: { screen: Settings217150Navigator },
UserProfile217148: { screen: UserProfile217148Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
