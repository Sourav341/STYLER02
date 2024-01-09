import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elevated]}>
          <Text> TAP </Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text> Me </Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text> To </Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text> Scroll </Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text> More </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 4,
  },
  elevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#5DA3FA',
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});
