import React, {useState, useEffect, useMemo} from 'react';
import {StyleSheet, Text, View, SectionList, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';

function DropDownFilterSection(props) {

    const toggleDropDown = (e) => {
        e.stopPropagation();
        if (props.isDisplaying && props.onSendCheckedData) {
            props.onSendCheckedData(props.checks);
        }
        if (props.onToggleList) {
            props.onToggleList();
        }
    };

    return (
        <View style={Object.assign({}, styles.section, {zIndex: (props.zIndex || 1)})}>
            <Icon
                name={props.isDisplaying ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                color='white'
                type='material'
                size={25}
                onPress={toggleDropDown}
            />
            <Text style={styles.title}>{props.title}</Text>
            { props.isDisplaying &&
                <View style={styles.dropDown}>
                    <View style={styles.blueLine}/>
                    <SectionList
                        sections={[
                            {data: ['Devin']},
                            {data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                        ]}
                        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                        keyExtractor={(item, index) => index}
                    />
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        width: '100%',
        //paddingRight: '5%',
        paddingLeft: '5%',
        paddingTop: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontWeight: 'bold',
        backgroundColor: 'rgb(75, 75, 75)',
        position: 'relative',
    },
    title: {
        color: '#ffffff',
        fontSize: 16,
        zIndex: 1,
    },
    dropDown: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        position: 'absolute',
        top: 0,
        maxHeight: '40%',
        width: '100%',
        paddingRight: '5%',
        paddingLeft: '15%',
        paddingTop: '12%',
        overflow: 'visible',
    },
    item: {
        color: '#ffffff',
        backgroundColor: 'rgb(75, 75, 75)',
        padding: '5%',
        zIndex: 5,
    },
    blueLine: {
        height: '2%',
        width: '100%',
        backgroundColor: "#61dafb",
    },
});

export default DropDownFilterSection;
