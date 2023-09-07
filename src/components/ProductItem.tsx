import {Image, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

type ProductProps = PropsWithChildren<{
  player: Player;
}>;

const ProductItem = ({player}: ProductProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: player.icon,
          }}
          style={styles.image}
        />
      </View>
      <Text style={styles.name}>{player.name}</Text>
      <Text style={styles.score}> {player.score} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
  },
  imageContainer: {
    width: '20%',
  },
  image: {
    height: 56,
    resizeMode: 'contain',
    marginRight: 12,
    width: 56,
  },
  name: {
    marginBottom: 4,
    fontSize: 20,
    fontWeight: '600',
    width: '65%',
    color: '#4B4B4B',
  },
  score: {
    fontSize: 20,
    fontWeight: '700',
    width: '15%',
    color: '#2E2E2E',
  },
});

export default ProductItem;
