import React, { Component } from 'react';
import {
    Text, TouchableOpacity,
    View, StyleSheet, Image, Dimensions, TextInput, Platform,
    KeyboardAvoidingView, ActivityIndicator, ImageBackground
} from 'react-native';
import { PermissionsAndroid } from 'react-native';
import firebase from 'react-native-firebase';

import RNFetchBlob from 'rn-fetch-blob';
const Blob =RNFetchBlob.polyfill.Blob;

const fs = RNFetchBlob.fs;
window.Blob=Blob;
window.XMLHttpRequest=RNFetchBlob.polyfill.XMLHttpRequest


export const primaryColorGreen = "#5fa0ae";
export const primaryColorRed = "#c94c4d";
export const backgroundColor = "#f7f5ea";
export const primaryColorBrown = "#5a4946";

export const white = "#fff";
