import React from 'react'
import { View, Text , Button} from 'react-native'

export default function loading(props) {
    return (
        <View>
            <Text>Hello</Text>
            <Button
            title='Press to stop'
            onPress={props.press}
            />
        </View>
    )
}
