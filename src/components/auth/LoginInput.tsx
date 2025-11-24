import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import React from 'react';
import LocalizedText from '../common/LocalizedText';
import { Dimension } from '../../common/constants/dimension';
import { useTranslation } from 'react-i18next';

interface LoginInputProps extends TextInputProps {
  labelText: string;
  placeholderText: string;
}

const LoginInput = ({
  labelText,
  placeholderText,
  ...textInputProps
}: LoginInputProps) => {
  const { t } = useTranslation();
  return (
    <View style={styles.inputContainer}>
      <LocalizedText style={styles.label} i18nKey={labelText} />
      <TextInput
        style={styles.input}
        placeholder={t(placeholderText)}
        placeholderTextColor="#999"
        {...textInputProps}
      />
    </View>
  );
};

export default LoginInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: Dimension.sizeY(20),
  },
  label: {
    fontSize: Dimension.sizeX(14),
    fontWeight: '600',
    color: '#333',
    marginBottom: Dimension.sizeY(8),
  },
  input: {
    height: Dimension.sizeY(52),
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: Dimension.radius(12),
    paddingHorizontal: Dimension.sizeX(16),
    fontSize: Dimension.sizeX(16),
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
});
