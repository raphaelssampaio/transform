import React, {useState, useEffect} from 'react';
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

import {kmToMi, miToKm, btb1, btb2, kmhms, mskmh} from '../../util/functions';

export default function Main() {
  const units = [
    {label: 'Pick a unit...', value: null},
    {label: 'KM to MILES', value: 'kmmi'},
    {label: 'MILES TO KM', value: 'mikm'},
    {label: 'BIT to BYTE', value: 'btb1'},
    {label: 'BYTE to BIT', value: 'btb2'},
    {label: 'KM/H to M/S', value: 'kmhms'},
    {label: 'M/S to KM/H', value: 'mskmh'},
  ];
  const [beforeTransform, setBeforeTransform] = useState(1);
  const [transformed, setTransformed] = useState(1000);
  const [unitBefore, setUnitBefore] = useState('Kilometers');
  const [unitAfter, setUnitAfter] = useState('Miles');
  const [unit, setUnit] = useState('kmmi');

  function handleSliderChange(value) {
    setBeforeTransform(value);
  }

  useEffect(() => {
    switch (unit) {
      case 'kmmi':
        setTransformed(kmToMi(beforeTransform));
        break;
      case 'mikm':
        setTransformed(miToKm(beforeTransform));
        break;
      case 'btb1':
        setTransformed(btb1(beforeTransform));
        break;
      case 'btb2':
        setTransformed(btb2(beforeTransform));
        break;
      case 'kmhms':
        setTransformed(kmhms(beforeTransform));
        break;
      case 'mskmh':
        setTransformed(mskmh(beforeTransform));
        break;
      default:
        setTransformed(kmToMi(beforeTransform));
    }
  }, [beforeTransform, unit]);

  function handleUnit(medida) {
    setUnit(medida);
    switch (medida) {
      case 'kmmi':
        setUnitBefore('Kilometers');
        setUnitAfter('Miles');
        break;
      case 'mikm':
        setUnitBefore('Miles');
        setUnitAfter('Kilometers');
        break;
      case 'btb1':
        setUnitBefore('BIT');
        setUnitAfter('BYTE');
        break;
      case 'btb2':
        setUnitBefore('BYTE');
        setUnitAfter('BIT');
        break;
      case 'kmhms':
        setUnitBefore('KM/H');
        setUnitAfter('M/S');
        break;
      case 'mskmh':
        setUnitBefore('M/S');
        setUnitAfter('KM/H');
        break;
      default:
        setUnitBefore('Kilometers');
        setUnitAfter('Miles');
    }
  }

  return (
    <Container>
      <PickerContainer>
        <RNPicker
          items={units}
          onValueChange={value => handleUnit(value)}
          value={unit}
        />
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
        <Slider
          maximumValue={10000}
          step={1}
          onValueChange={value => handleSliderChange(value)}
        />
      </SliderContainer>
    </Container>
  );
}
