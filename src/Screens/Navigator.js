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
  welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      title: SCREEN_CONSTANTS.TITLE.WelcomeScreen
    }
  },
  main: {
    screen: TabNavigator({
      map: {
        screen: MapScreen,
        navigationOptions: {
          title: SCREEN_CONSTANTS.TITLE.MapScreen
        },
      },
      deck: {
        screen: DeckScreen,
        navigationOptions: {
          title: SCREEN_CONSTANTS.TITLE.DeckScreen
        },
      },
      review: {
        screen: StackNavigator({
          review: {
            screen: ReviewScreen,
            navigationOptions: {
              title: SCREEN_CONSTANTS.TITLE.ReviewScreen
            },
          },
          settings: {
            screen: SettingsScreen,
            navigationOptions: {
              title: SCREEN_CONSTANTS.TITLE.DeckScreen
            },
          },
        })
      }
    })
  }
});
