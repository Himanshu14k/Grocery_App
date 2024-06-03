import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const WrapperComponent = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <LinearGradient
        colors={["rgba(233, 228, 228, 1)", "rgba(232, 194, 194, 1)"]}
        useAngle={true}
        angle={165}
        angleCenter={{ x: 0.7, y: 0.7 }}
        style={{ flex: 1, }}
      >
        {children}
      </LinearGradient>
    </View>
  );
};

export default WrapperComponent;
