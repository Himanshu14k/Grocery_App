import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';

const GradientText = ({text, style}) => {
  return (
    <MaskedView
      style={style}
      maskElement={
        <View style={styles.maskContainer}>
          <Text style={[styles.text]}>{text}</Text>
        </View>
      }>
      <LinearGradient
        colors={['rgba(0, 67, 198, 1)','rgba(195, 0, 0, 1)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradient}
      />
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  maskContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: '500',
    lineHeight: 25,
  },
  gradient: {
    flex: 1,
  },
});

export default GradientText;
