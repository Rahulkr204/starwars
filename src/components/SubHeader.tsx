import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SubHeader = ({ text }) => {
  return (
    <View style={styles.subHeaderContainer}>
      <Text style={styles.subHeaderText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subHeaderContainer: {
    width: '100%',
    height: 48,
    paddingLeft: 16,
    backgroundColor: '#eee',
    alignItems: 'center',
    flexDirection: 'row',
  },
  subHeaderText: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default SubHeader;
