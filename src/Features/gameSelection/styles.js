import {ScaledSheet} from 'react-native-size-matters';
export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  mainView: {
    backgroundColor: 'rgba(0,0,0,0.35)',
    flex:1,
    justifyContent: "center",
    alignItems:'center'
  },
  header: {
    justifyContent: 'center',
    flex: 30,
    top: '40@ms',
  },
  animation: {
    height: '50@vs',
    justifyContent: 'center',
  },
  levels: {
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 0.12, 
    backgroundColor: 'rgba(0,0,0,0.35)', 
    marginTop: '10@ms', 
    width: '80%', 
    borderRadius: '10@ms' 
  },
  header: {
    backgroundColor:'rgba(0,0,0,0.65)',
    width: '100%',
    padding: '15@ms',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headertxt: {
    fontSize: '16@ms',
    fontWeight: 'bold',
    color: '#999999',
  }
});
