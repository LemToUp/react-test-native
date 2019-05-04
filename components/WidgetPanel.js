import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements'

function Widget(props) {
    return (
        <View style={styles.widget}>
            <Icon style={styles.icon} name='reorder'/>
        </View>
    );
}

const styles = StyleSheet.create({
    widget: {
        flex:1,
        backgroundColor: '#F7F7F7',
        height: 100,
        padding: '5%',
        flexDirection: 'row',
    },
    icon: {
        flex:0.3,
        alignItems: 'flex-start',
    },
});

export default Widget;
