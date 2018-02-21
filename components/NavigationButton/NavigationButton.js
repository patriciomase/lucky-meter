import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import TableView from 'react-native-tableview'

const { Section, Item } = TableView;

const NavigationButton = (props) => {
  return (
    <TableView
      style={{ flex: 1 }}
      tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
    >
      <Section>
        {['Option 1', 'Option 2'].map(opt => <Item key={opt}>{opt}</Item>)}
      </Section>
    </TableView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#666',
    fontSize: 20,
    height: 26,
  },
  waitForButton: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  }
});

export default NavigationButton;
