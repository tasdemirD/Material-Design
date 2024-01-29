import React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from 'react-native';

export default function MainAppbar(props){
    return (
        <Appbar.Header style={styles.header} mode="center-aligned" elevated={true}>
            <Appbar.Content  title={props.title}/>
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'lightblue'
    },
});