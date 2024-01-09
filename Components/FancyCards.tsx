import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingtext}>Trending Places</Text>
      <View style={[styles.card, styles.cardsElevated]}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg',
          }}
          style={styles.cardImages}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}> Chilling Spot </Text>
          <Text style={styles.cardlabel}> Amazon </Text>
          <Text style={styles.cardDescr}>
            {' '}
            The Amazon forest occupies a relevant place on the international
            scene and its importance is recognized worldwide. The goal of this
            paper is to present general information about the Amazon area,
            showing the biodiversity and the environmental, social, and economic
            impact in exploring that area. This paper will also emphasize what
            are the values of that ecosystem to the world, explaining about
            several natural resources, fauna, and flora in the Amazon forest
          </Text>
          <Text style={styles.cardFooter}> 1 month away </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingtext: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 400,
    height: 420,
    borderRadius: 7,
    marginVertical: 12,
    marginHorizontal: 5,
  },
  cardsElevated: {
    backgroundColor: '#50DBB4',
    elevation: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImages: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardlabel: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 6,
  },
  cardDescr: {
    color: '#393A42',
    fontSize: 13,
    marginTop: 6,
    marginBottom: 12,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#000000',
  },
});
