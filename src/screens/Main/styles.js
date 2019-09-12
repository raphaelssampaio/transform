import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight()}px;
  background: #ddd;
  align-items: center;
  justify-content: center;
`;

export const AuthorText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const DefaultText = styled.Text`
  font-size: 26px;
`;
