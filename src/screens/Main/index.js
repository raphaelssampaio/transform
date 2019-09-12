import React, {useState} from 'react';
import {
  Container,
  CardContainer,
  Card,
  TextToBeConverted,
  TextTransformed,
  TextCardContainer,
  CommonText,
  PickerContainer,
  SliderContainer,
  SliderText,
  Slider,
} from './styles';

import RNPicker from '../../components/Picker';

export default function Main() {
  const [beforeTransform, setBeforeTransform] = useState(1);
  const [transformed, setTransformed] = useState(1000);
  const [units] = useState([
    {label: 'KM to MILES', value: 'kmml'},
    {label: 'MILES TO KM', value: 'mlkm'},
    {label: 'BIT to BYTE', value: 'btb1'},
    {label: 'BYTE to BIT', value: 'btb2'},
    {label: 'KM/H to M/S', value: 'kmhms'},
    {label: 'M/S to KM/H', value: 'mskmh'},
  ]);
  const [unitBefore, setUnitBefore] = useState('kilometer');
  const [unitAfter, setUnitAfter] = useState('meter');

  return (
    <Container>
      <PickerContainer>
        <RNPicker items={units} />
      </PickerContainer>

      <CardContainer>
        <TextCardContainer>
          <CommonText> {unitBefore} </CommonText>
          <Card>
            <TextToBeConverted>{beforeTransform}</TextToBeConverted>
          </Card>
        </TextCardContainer>
        <TextCardContainer>
          <CommonText> {unitAfter} </CommonText>
          <Card>
            <TextTransformed>{transformed}</TextTransformed>
          </Card>
        </TextCardContainer>
      </CardContainer>

      <SliderContainer>
        <SliderText>Slide to change</SliderText>
        <Slider />
      </SliderContainer>
    </Container>
  );
}
