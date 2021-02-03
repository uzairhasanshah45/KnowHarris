import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  mainView: {
    backgroundColor: 'rgba(0,0,0,0.20)', 
    flex:1
  },
  animationHeader: {
    height: '30@vs',
  },
  animationBox: {
    marginVertical: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
  },
  quizheader: {
    backgroundColor:'rgba(0,0,0,0.65)',
    width: '100%',
    padding: '15@ms',
    justifyContent: 'center',
    alignItems: 'center'
  },
  subheaderText: {
    color: 'white',
  },
  questionContainer1: {
    marginTop: '35@ms',
    padding: '10@ms',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '30@ms',
    height: '150@ms'
  },
  question: {
    fontSize : '25@ms',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '15@ms'
  },
  individualScore: {
    height: '40@ms',
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: '10@ms',
    top: '13@ms'
  },
  individualScore1: {
    height: '45@ms',
    width: '13%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: '1@ms',
    // backgroundColor: '#61a5c2',
    backgroundColor: 'rgba(0,0,0,0.20)', 
    borderColor: '#61a5c2',
    borderRadius: '25@ms',
    position: 'absolute',
    left: '40@ms',
    top: '10@ms'
  },
  scoreText: {
    fontSize: '18@ms',
    textAlign: 'center',
    color: 'white',
  },
  questionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8@ms',
    marginHorizontal: '25@ms',
    flexDirection: 'row',
    marginTop: '30@ms',
    height: '100@ms'
  },
  questionText: {
    fontSize: '16@ms',
    color: 'white',
  },
  gifImg: {
    height: '35@ms',
    width: '35@ms'
  },
  problemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20@ms',
  },
  optionsBox: {
    marginHorizontal: '25@ms',
    marginVertical: '3@ms',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5@ms',
  },
  individualOptions: {
    height: '50@ms',
    justifyContent: 'center',
    width: '90%',
    borderRadius: '30@ms',
    borderWidth: '1@ms',
    borderColor: '#61a5c2',
    // backgroundColor: '#61a5c2',
    backgroundColor: 'rgba(0,0,0,0.20)', 
  },
  options: {
    fontSize: '15@ms',
    textAlign: 'center',
    color: 'white',
    padding: 8
  },
  buttonContainer: {
    marginTop: '25@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontIcon: {
    fontSize: '35@ms',
    paddingHorizontal: '4@ms',
    color: 'white',
  },
  iconText: {
    fontSize: '22@ms',
    color: 'white',
  },
});

export default styles;
