import {
    Image,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import LinearGradient from 'react-native-linear-gradient';
import { responsiveWidth } from '../../utils/responsiveSize';
  
  const ModalView = ({
    visible = false,
    onChangeModalStatus = () => {},
    data= {},
  }) => {
    const authors = data?.authors?.slice(0, 3).map(author => author.name).join(', ');

    return (
      <Modal
        transparent={true}
        animationType="fade"
        visible={visible}
        onRequestClose={() => onChangeModalStatus()}>
        <TouchableOpacity onPress={() => onChangeModalStatus()} activeOpacity={1} style={styles.container1}>
          <View style={styles.container2}>
            <View style={styles.container3}>
              <Image
                style={styles.img1}
                source={{uri: data?.formats?.['image/jpeg']}}
              />
            </View>
            <View style={styles.container4}>
              <LinearGradient
                colors={['rgba(145, 119, 191, 1)', 'rgba(196, 132, 220, 1)']}
                useAngle={true}
                angle={30}
                angleCenter={{x: 0.7, y: 0.7}}
                style={styles.container5}>
                <Text numberOfLines={1} style={styles.title1}>{data?.title}</Text>
                <Text numberOfLines={1} style={styles.title2}>{authors}</Text>
              </LinearGradient>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };
  
  export default ModalView;
  
  const styles = StyleSheet.create({
    container1: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.64)',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    container2: {
      // marginHorizontal: responsiveWidth(1)

    },
    container3: {
    },
    img1: {
      height: 320,
      minWidth: responsiveWidth(95),
      resizeMode: 'stretch',
      borderTopLeftRadius: 21,
      borderTopRightRadius: 21,
    },
    container4: {
      height: 90,
      borderBottomLeftRadius: 20,
    },
    container5: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 30,
      gap: 10,
      borderBottomLeftRadius: 21,
      borderBottomRightRadius: 21,
    },
    title1: {
      fontSize: 24,
      lineHeight: 28,
      fontWeight: '400',
      color: '#000',
    },
    title2: {
      fontSize: 16,
      lineHeight: 18,
      fontWeight: '400',
      color: '#fff',
    },
  });
  