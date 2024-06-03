import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import appImages from '../../theme/images';
import {goBack} from '../../navigations/navigationServices';

const CustomHeader = ({
    bacBtn=true,
    headerExtraStyle=styles.container2,
    header=""
}) => {
  return (
    <View style={styles.container1}>
      {bacBtn && <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btn1}
        onPress={goBack}>
        <Image source={appImages.lArrow} style={styles.icon1} />
      </TouchableOpacity>}
      <View style={headerExtraStyle}>
        <Text style={styles.title1}>{header}</Text>
      </View>
      {bacBtn && <View style={styles.btn1} />}
    </View>
  );
};

export default CustomHeader;
