import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';

import {
  WelcomeScreen,
  SettingsScreen,
  MapScreen,
  DeckScreen,
  ReviewScreen,
  SCREEN_CONSTANTS,
} from './';

export default TabNavigator({
  [SCREEN_CONSTANTS.ID.WelcomeScreen]: {
    screen: WelcomeScreen,
    navigationOptions: {
      title: SCREEN_CONSTANTS.TITLE.WelcomeScreen
    }
  },
  main: {
    screen: TabNavigator({
      [SCREEN_CONSTANTS.ID.MapScreen]: {
        screen: MapScreen,
        navigationOptions: {
          title: SCREEN_CONSTANTS.TITLE.MapScreen
        },
      },
      [SCREEN_CONSTANTS.ID.DeckScreen]: {
        screen: DeckScreen,
        navigationOptions: {
          title: SCREEN_CONSTANTS.TITLE.DeckScreen
        },
      },
      review: {
        screen: StackNavigator({
          [SCREEN_CONSTANTS.ID.ReviewScreen]: {
            screen: ReviewScreen,
            navigationOptions: {
              title: SCREEN_CONSTANTS.TITLE.ReviewScreen,
            },
          },
          [SCREEN_CONSTANTS.ID.SettingsScreen]: {
            screen: SettingsScreen,
            navigationOptions: {
              title: SCREEN_CONSTANTS.TITLE.SettingsScreen
            },
          }
        })
      }
    },{
      tabBarPosition: 'bottom',
      tabBarOptions: {
        //style: tabBarStyle,
      }
    })
  }
},
{
  navigationOptions: {
    //tabBarVisible: false,
  },
});


