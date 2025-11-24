import { StyleSheet } from 'react-native';
import LocalizedText from '../common/LocalizedText';

export const HeaderTitle = (label: string) => (
  <LocalizedText i18nKey={label} style={styles.headerTitle} />
);

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
