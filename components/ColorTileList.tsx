import React from "react";
import { StyleSheet, View, Text, useWindowDimensions, TouchableOpacity, ColorValue } from "react-native";

const ColorTileList: React.FC = () => {
  const dimensions = useWindowDimensions();
  const tileSize = dimensions.width / 5;

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}
    >
      {new Array(10).fill(0).map((_, i) => {
        return (
			    <ColorTile 
            tileSize={tileSize}
            value={i + 1}
            color={'test'}
            key={i}
				  />
			  );
      })}
    </View>
  );
};

export default ColorTileList;

type ColorSizeProps = {
	tileSize: number
  value: number
  color: ColorValue
}

const ColorTile: React.FC<ColorSizeProps> = (props) => {
  return (
		<TouchableOpacity 
			style={{
				width: props.tileSize,
				height: props.tileSize,
				backgroundColor: props.color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
			}}
		>
			<Text
        style={{
          fontSize: 50
        }}
      >{props.value}</Text>
		</TouchableOpacity>
	);
};
