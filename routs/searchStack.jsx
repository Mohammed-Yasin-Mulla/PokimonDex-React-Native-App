import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Search from '../screens/Search'
import Details from '../screens/Details.jsx'

const screens = {
    Search: {
            screen: Search,
    },
    Details: {
        screen: Details 
    }

}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)