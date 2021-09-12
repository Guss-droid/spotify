import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.1,
  },
  buttonFree: {
    width: '75%',
    height: 56,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.on,
    marginTop: 85,

  },
  button: {
    width: '75%',
    height: 56,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    backgroundColor: '#FFF2',
    borderBottomColor: '#FF0'
  },
  logIn: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.1,
    marginTop: 15
  },
  icon: {
    width: 90,
    height: 90,
    marginBottom: 70
  },
});