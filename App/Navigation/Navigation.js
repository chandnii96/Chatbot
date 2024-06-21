import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InitialChoiceScreen from '../Pages/InitialChoiceScreen';
import GeneralChatbot from '../Pages/GeneralChatbot';
import RetirementChatbot from '../Pages/RetirementChatbot';
import InvestmentChatbot from '../Pages/InvestmentChatbot';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InitialChoice">
        <Stack.Screen name="InitialChoice" component={InitialChoiceScreen} />
        <Stack.Screen name="GeneralChatbot" component={GeneralChatbot} />
        <Stack.Screen name="RetirementChatbot" component={RetirementChatbot} />
        <Stack.Screen name="InvestmentChatbot" component={InvestmentChatbot} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
