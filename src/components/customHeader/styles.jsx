import {StyleSheet} from 'react-native';
import {responsiveHeight, responsiveWidth} from '../../utils/responsiveSize';

const styles = StyleSheet.create({
  container1: {
    height: responsiveHeight(9),
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn1: {
    height: '100%',
    justifyContent: 'center',
    // alignItems: 'flex-start',
    width: responsiveWidth(12),
  },
  icon1: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  container2: {
    flex: 1,
  },
  title1: {
    color: 'rgba(55, 71, 79, 1)',
    fontSize: 25,
    lineHeight: 48,
    fontWeight: '700',
  },
});

export default styles;
