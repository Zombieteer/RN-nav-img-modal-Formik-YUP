import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { images } from '../styles/global'

export const reviewDetails = ({ navigation }) => {

    // const pressHandler = () => {
    //     navigation.goBack()
    // }

    const rating = navigation.getParam('rating')

    return (
        <View style={styles.container}>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <View>
                <Text>GameZone rating: </Text>
                <Image source={images.ratings[rating]} />
            </View>
            {/* <Button title='go back' onPress={pressHandler} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})

export default reviewDetails