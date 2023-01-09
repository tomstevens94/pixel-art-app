import { View, Text } from 'react-native'
import React from 'react'

import PuzzleContainer from '../components/PuzzleContainer';

import ColorTileList from '../components/ColorTileList'

const PuzzleScreen: React.FC = () => {
  return (
    <View
      style={{
        height: '100%',
        flex: 1,
        justifyContent: 'flex-end'
      }}
    >
      <PuzzleContainer />
      <ColorTileList />
    </View>
  )
}

export default PuzzleScreen;