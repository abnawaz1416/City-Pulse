import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

interface LocalizedTextProps extends Omit<TextProps, 'children'> {
  i18nKey: string;
  values?: Record<string, string | number>;
  fallback?: string;
}

const LocalizedText = ({
  i18nKey,
  values,
  fallback,
  style,
  ...textProps
}: LocalizedTextProps) => {
  const { t } = useTranslation();

  const translatedText = t(i18nKey, values || {});

  const displayText =
    translatedText === i18nKey && fallback ? fallback : translatedText;

  return (
    <Text style={[styles.default, style]} {...textProps}>
      {displayText}
    </Text>
  );
};

export default LocalizedText;

const styles = StyleSheet.create({
  default: {
    // Default text styles can be added here if needed
  },
});
