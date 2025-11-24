import LocalizedText from '../common/LocalizedText';

export const TabBarLabel = (label: string, color: string) => (
  <LocalizedText
    i18nKey={label}
    style={{
      color,
    }}
  />
);
