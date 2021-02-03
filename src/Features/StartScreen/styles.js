import {ScaledSheet} from 'react-native-size-matters';
export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  mainView: {
    backgroundColor: 'rgba(0,0,0,0.35)',
    flex:1
  },
  header: {
    justifyContent: 'center',
    flex: 30,
    top: '40@ms',
  },
  subheaderText: {
    fontSize: '40@ms',
    fontWeight: 'bold',
    color: '#999999',
    paddingHorizontal: '15@ms',
    lineHeight: '37@ms',
    backgroundColor:'rgba(0,0,0,0.25)',
    width: '100%',
    padding: '20@ms'
  },
  animation: {
    height: '220@vs',
    width: '200@vs',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation2: {
    height: '300@ms',
    width: '300@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationBox: {
    marginVertical: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
  },
  instruction: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructiontext: {
    fontSize: '15@ms',
    color: 'white',
  },
  instructionTextTitle: {
    margin: '8@ms',
    color: 'white',
    fontSize: '20@ms',
    fontWeight: 'bold',
  },
  buttonBox: {flexDirection: 'column', flex:1, },
  button: {
    height: '55@ms',
    width: '140@ms',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: '10@ms',
    borderWidth: '1@ms',
    borderColor: '#999999',
    backgroundColor: 'transparent',
    marginVertical: '3@ms'
  },
  txt: {
    fontSize: '20@ms',
    color: '#fff'
  },
  successHeader: {
    alignItems: 'center',
    marginTop: '50@ms',
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  headerText: {
    color: 'white',
    fontSize: '60@ms',
    fontFamily: 'Cochin',
    fontWeight: 'bold'
  },
  successSubheaderText: {
    fontSize: '16@ms',
    color: 'white',
  },
  instruction: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructiontext: {
    fontSize: '15@ms',
    color: 'white',
  },
  mainViewFail: {
    backgroundColor: '#f4845f',
    flex:1
  },
});
