import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen014735Navigator from '../features/BlankScreen014735/navigator';
import BlankScreen014734Navigator from '../features/BlankScreen014734/navigator';
import CopyOfBlankScreen014732Navigator from '../features/CopyOfBlankScreen014732/navigator';
import BlankScreen014731Navigator from '../features/BlankScreen014731/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen014735: { screen: BlankScreen014735Navigator },
BlankScreen014734: { screen: BlankScreen014734Navigator },
CopyOfBlankScreen014732: { screen: CopyOfBlankScreen014732Navigator },
BlankScreen014731: { screen: BlankScreen014731Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
