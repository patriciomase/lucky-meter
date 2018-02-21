import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import TableView from 'react-native-tableview'

const { Section, Item } = TableView;

const options = [
  'Wait for ...',
  'See waiting lists'
];

const HomeScreenNavigation = (props) => {
  return (
    <TableView
      style={{ flex: 1 }}
      tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
    >
      <Section>
        {options.map(opt => <Item
          key={opt}
          accessoryType={TableView.Consts.AccessoryType.DisclosureIndicator}
          >{opt}</Item>)}
      </Section>
    </TableView>
  );
}

export default HomeScreenNavigation;
