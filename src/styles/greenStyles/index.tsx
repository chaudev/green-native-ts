import React from 'react';
import {StyleSheet} from 'react-native';

export const GreenStyles = StyleSheet.create({
  Center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ColumCenter: {
    alignItems: 'center',
  },
  ShadowBox: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
  },
  Title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
