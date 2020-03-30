import { createStackNavigator } from 'react-navigation-stack'
import About from '../screens/about'
import Header from '../shared/header'
import React from 'react'

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='About GameZone' />
            }
            // title: 'About GameZone', // title takes only string
            // headerStyle: { backgroundColor: '#eee' }
        }
    }
}

const aboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', /*height: 60*/ },
        headerTitleAlign: "center"
    }
})

export default aboutStack