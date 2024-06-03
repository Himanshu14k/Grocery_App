import {StyleSheet} from 'react-native';
import {responsiveHeight, responsiveWidth} from '../../utils/responsiveSize';

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingHorizontal: responsiveWidth(5),
  },
  container2: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    elevation: 5,
    borderRadius: 7,
    alignItems: 'center',
  },
  icon1: {
    alignSelf: 'center',
    width: 25,
    height: 25,
    resizeMode: 'contain',
    paddingHorizontal: responsiveWidth(6),
  },
  textInput: {
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
    height: 52,
  },
  list: {
    flex: 1
  },
  listContent: {
    flexGrow: 1,
    paddingBottom: responsiveHeight(15)
  },
  columnWrapper: {
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  container3: {
    width: 164,
  },
  btn1: {},
  container4: {
    width: 164,
    height: 135,
    backgroundColor: 'rgba(243, 244, 244, 1)',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img1: {
    height: 100,
    width: 90,
    resizeMode: 'contain',
  },
  title1: {
    color: 'rgba(55, 71, 79, 1)',
    fontSize: 14,
    fontWeight: '500',
  },
  title2: {
    color: 'rgba(243, 122, 32, 1)',
    fontSize: 16,
    fontWeight: '900',
  },
  btn2: {
    flexDirection: "row",
    height: 40,
    backgroundColor: "rgba(94, 196, 1, 1)",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  icon2: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  title3: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 12,
    fontWeight: '700',
  },
  container5: {
    position: "absolute",
    backgroundColor: "rgba(255, 248, 231, 1)",
    width: "100%",
    bottom: responsiveHeight(4),
    left: responsiveWidth(5),
    right: 0,
    alignSelf: "center",
    borderRadius: 10,
    paddingHorizontal: responsiveWidth(5),
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(2)
  },
  container6: {},
  title4: {
    color: 'rgba(55, 71, 79, 1)',
    fontSize: 12,
    fontWeight: '500',
  },
  title5: {
    color: 'rgba(55, 71, 79, 1)',
    fontSize: 10,
    fontWeight: '500',
  },
  btn3: {
    height: 35,
    width: 105,
    backgroundColor: "rgba(94, 196, 1, 1)",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8

  },
});

export default styles;
