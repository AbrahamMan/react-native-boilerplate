import { StyleSheet } from 'react-native'

import { COLORS } from '../../themes'

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white
  },
  button: {
    marginTop: 10
  }
}

export { styles as stylesObj }
export default StyleSheet.create(styles)
