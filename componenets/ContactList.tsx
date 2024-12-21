import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactList = () => {

    const contacts =[
        {
            uid: 1,
            name: 'Ajikya Sharma',
            status: 'I love to Code and Tech!',
            imageUrl: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png',
        },
        {
            uid: 2,
            name: 'Ajikya Sharma',
            status: 'I love to Code and Tech!',
            imageUrl: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png',
        },
        {
            uid: 3,
            name: 'Ajikya Sharma',
            status: 'I love to Code and Tech!',
            imageUrl: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png',
        },
        {
            uid: 4,
            name: 'Ajikya Sharma',
            status: 'I love to Code and Tech!',
            imageUrl: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png',
        },
        {
            uid: 5,
            name: 'Ajikya Sharma',
            status: 'I love to Code and Tech!',
            imageUrl: 'https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png',
        }
    ]


  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView 
      style={styles.container}
      scrollEnabled={false}
      >
       {contacts.map(({uid, name, status, imageUrl})=>(
        <View key={uid} style={styles.userCard}>
            <Image 
            source={{
                uri:imageUrl
            }}
            style={styles.userImage}
            />
            <View>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
            </View>

        </View>
       ))}
      </ScrollView>
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container:{
        paddingHorizontal:16,
        marginBottom: 4,
    },
    userCard:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor:"#8D3DAF",
        padding:4,
        borderRadius: 14
    },
    userImage:{
        width: 60,
        height: 60,
        borderRadius: 60 /2,
        marginRight:14,
    },
    userName:{
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    userStatus:{
        fontSize: 12,

    },
})