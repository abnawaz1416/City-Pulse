import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, { forwardRef, PropsWithChildren, Ref, useCallback } from 'react';
import { StyleSheet } from 'react-native';

type CustomBottomSheetProps = {
  name: string;
};

const CustomBottomSheet = (
  { name, children }: PropsWithChildren<CustomBottomSheetProps>,
  ref: Ref<BottomSheetModal>,
) => {
  const renderBackDrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      ref={ref}
      name={name}
      backdropComponent={renderBackDrop}
      backgroundStyle={styles.backgroundStyle}
      handleIndicatorStyle={styles.handleIndicatorStyle}
    >
      <BottomSheetView style={styles.view}>{children}</BottomSheetView>
    </BottomSheetModal>
  );
};

export default forwardRef(CustomBottomSheet);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 48,
  },
  backgroundStyle: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  handleIndicatorStyle: { backgroundColor: '#f0f0f0' },
});
