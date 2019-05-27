import {StyleSheet, View, Modal, Text, TouchableHighlight, Alert} from 'react-native';
import React, {useState} from 'react';
import {Icon} from 'react-native-elements';
import DropDownFilterSection from './DropDownFilterSection';

export const dataTypes = {
    CONTEXT: 'CONTEXTS',
    DIMENTIONS: 'DIMENTIONS',
    FILTERS: 'FILTERS',
    SORT: 'SORT',
};

export function Filter(props) {

    const [isContextListDisplaying, setIsContextListDisplaying] = useState(false);
    const [isDimentionsListDisplaying, setIsDimentionsListDisplaying] = useState(false);

    const closeAllLists = () => {
        setIsContextListDisplaying(false);
        setIsDimentionsListDisplaying(false);
    };

    const onToggleContexts = () => {
        if (!isContextListDisplaying) {
            closeAllLists();
        } else {
            //storeFilterData(dataTypes.DIMENTIONS, props.filterContextsChecks);
            setIsDimentionsListDisplaying(true);
        }
        setIsContextListDisplaying(!isContextListDisplaying);
    };

    const onToggleDimentions = () => {
        if (!isDimentionsListDisplaying) {
            closeAllLists();
        } else {
            //storeFilterData(dataTypes.FILTERS, props.filterDimentionsChecks);
        }
        setIsDimentionsListDisplaying(!isDimentionsListDisplaying);
    };

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.isShow}
            onRequestClose={() => {
                props.closeEvent();
            }}
        >
            <View style={styles.filter}>
                <View style={styles.contentSection}>
                    <View style={styles.titleSection}>
                        <Text style={styles.header}>CONTEXTS</Text>
                        <Icon
                            name='close'
                            color='white'
                            size={30}
                            style={styles.closeIcon}
                            onPress={() => {
                                props.closeEvent();
                            }}
                        />
                    </View>
                    <DropDownFilterSection
                        title="CONTEXTS"
                        onToggleList={onToggleContexts}
                        //onSendCheckedData={onGetContexts}
                        //data={props.filterContexts}
                        isDisplaying={isContextListDisplaying}
                        //checks={props.filterContextsChecks}
                        zIndex={30}
                    />
                    <DropDownFilterSection
                        title="DIMENTIONS"
                        onToggleList={onToggleDimentions}
                        //onSendCheckedData={onGetContexts}
                        //data={props.filterContexts}
                        isDisplaying={isDimentionsListDisplaying}
                        //checks={props.filterContextsChecks}
                        zIndex={20}
                    />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    filter: {
        width: '90%',
        height: '100%',
        backgroundColor: 'rgba(39, 39, 39, 0.75)',
        margin: '5%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    contentSection: {
        flex: 0.8,
        margin: '5%',
        marginRight: 0,
    },
    titleSection: {
        width: '100%',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingRight: '5%',
    },
    header: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20,
        width: '90%',
    },
    closeIcon: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
});

export default Filter;
