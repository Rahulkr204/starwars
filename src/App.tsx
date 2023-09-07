import React from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Home from './screens/Home';
import MatchDetails from './screens/MatchDetails';

// utils
import {getPlayerName} from './utils';

export type RootStackPramList = {
  Home: undefined;
  MatchDetails: {playerId: number};
};

const Stack = createNativeStackNavigator<RootStackPramList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Star Wars Master Blaster Tournament',
          }}
        />
        <Stack.Screen
          name="MatchDetails"
          component={MatchDetails}
          options={({route}) => ({
            title: getPlayerName(route.params.playerId),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
