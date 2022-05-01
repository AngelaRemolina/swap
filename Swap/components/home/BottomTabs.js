import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { IconButton, Colors } from 'react-native-paper';


export default function BottomTabs() {

    return (
        <View style={{ flexDirection: "row", margin: 10, marginHorizontal: 30, justifyContent: "space-between" }}>
            <Icon icon="home" text="Inicio" />
            <Icon icon="search" text="Buscar" />
            <Icon icon="shopping-bag" text="Comprar" />
            <Icon icon="receipt" text="Ordenes" />
            <IconButton
                icon="user"
                text="Perfil"
                onPress={() => console.log('Pressed_user')}
            />
            {/* <Icon icon="user" text="Perfil" /> */}
        </View>
    )
}

const Icon = (props) => (
    <TouchableOpacity>
        <View>
            <FontAwesome5
                name={props.icon}
                size={25}
                style={{ marginBottom: 3, alignSelf: "center" }} />
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
)