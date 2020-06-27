import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import search from "./src/screens/searchScreen";
import resultsShow from "./src/screens/resultsShow";

//Client ID
// UGbiQHVjSvZYP0aJ5X_ngg
//
// API Key
// 0YW6Whi31m3IqeArkAu2s5qS6IJ741b6E93l-WfBPe8aQBLL3jw1a4H3cTTBkXPTX196PXhQX8wRJkhvhu7OQuN5DNwcauNU4D5CZB4N59Z4K7ren58UfdJZlHP1XnYx

const navigator = createStackNavigator(
  {
    resultsShows: resultsShow,
    searchScreen: search
  },
  {
    initialRouteName: "searchScreen",
    defaultNavigationOptions: {
      title: "Restaurant Search"
    }
  }
);

export default createAppContainer(navigator);
