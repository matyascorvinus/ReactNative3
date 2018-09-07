import React, { Component } from 'react';
import {
    Text, TouchableOpacity,
    View, StyleSheet, Image, Dimensions, TextInput, Platform,
    KeyboardAvoidingView, ActivityIndicator, ImageBackground
} from 'react-native';
import { PermissionsAndroid } from 'react-native';
import firebase from 'react-native-firebase';

export const primaryColorGreen = "#5fa0ae";
export const primaryColorRed = "#c94c4d";
export const backgroundColor = "#f7f5ea";
export const primaryColorBrown = "#5a4946";

export const white = "#fff";

export const uploadImage =(uri,mine ='application/octet-stream')=>
{
    return(dispatch) =>
    {
        return new  Promise((resolve,reject)=>{
            const uploadUri = Platform.iOS ==='ios' ? uri.replace('file://',''): uri
            const sessionId = new Date().getTime()
            let uploadBlob =null

            const imageRef =firebase.storage().ref('Pictures').child('Destiny')

            fs.readFile(uploadUri,'base64')
            .then((data)=>{
                return Blob.build(data,{type: `${mine};BASE64`})
            })
            .then((blob)=>{
                uploadBlob=blob
                return imageRef.put(bob,{ contentType:mine })
            })
            .then(()=>{
                uploadBlob.close()
                return imageRef.getDownloadURL()
            })
            .then((url)=>{
                resolve(url)
                storeReference(url,sessionId)
            })
            .catch((error)=>{
                reject(error)
            })
        })
    }
}

const storeReference =(downloadUrl,sessionId) =>{
    let imageRef=firebase.storage().ref('Pictures').child('Destiny')
    let currentUser =firebase.auth().currentUser
    let image ={
        type: 'image',
        url: downloadUrl,
        createdAt:sessionId,
        user:{
            id:currentUser.uid,
            email:currentUser.email,
        }
    }
    firebase.database().ref('pathtoyourreference').push(image)
}