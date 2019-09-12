import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight()}px;
  background: #ddd;
  align-items: center;
  justify-content: space-around;
`;

export const TextCardContainer = styled.View``;

export const Card = styled.View`
  background: #fff;
  width: 100;
  height: 100;
  margin: 10px 5px 5px 5px;
  flex-direction: row;
  justify-content: space-around;
  shadow-opacity: 0.3;
  border-radius: 2;
  align-items: center;
`;

export const PickerContainer = styled.View``;

export const PickerText = styled.Text`
  font-size: 16px;
`;

export const CommonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  align-self: center;
`;

export const CardContainer = styled.View`
  align-content: center;
  flex-direction: row;
`;
export const TextToBeConverted = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const TextTransformed = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const SliderContainer = styled.View`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  shadow-opacity: 0.2;
`;

export const SliderText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  align-self: center;
  margin-bottom: 40px;
`;

export const Slider = styled.Slider``;
