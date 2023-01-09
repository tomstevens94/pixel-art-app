import { View, Text, Image, createElement, ColorValue, useWindowDimensions } from 'react-native'
import React, {useState} from 'react';
import { puzzleImage } from '../data/testImage';

const PuzzleContainer = () => {
  const dimensions = useWindowDimensions();

  if (puzzleImage.pixels.length !== puzzleImage.dimensions.x * puzzleImage.dimensions.y) {
    console.log('INCORRECT PIXEL ARRAY LENGTH');

    return null;
  }

  return (
    <View
      style={{
        transform: [{
          scale: 1
        }],
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
      }}
    >
      {
        puzzleImage.pixels.map((color, i) => {
          return <Pixel color={color} colorIndex={0} size={dimensions.width / puzzleImage.dimensions.x}/>
        })
      }
    </View>
  )
}

export default PuzzleContainer;

type PixelProps = {
  color: ColorValue
  colorIndex: number
  size: number
}

const Pixel: React.FC<PixelProps> = (props) => {
  return (
    <View
      style={{
        width: props.size,
        height: props.size,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.color,
        aspectRatio: 1,
        position: 'relative'
      }}
    >
        <Text>{props.colorIndex}</Text>
    </View>
  )
}