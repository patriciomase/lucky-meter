import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import TableView from 'react-native-tableview'
import AppRoutesProvider from '../AppRoutesProvider/AppRoutesProvider';

const { Section, Item } = TableView;

const options = [
  'Wait for ...',
  'See waiting lists'
];

const HomeScreenNavigation = (props) => {
  return (
    <AppRoutesProvider render={(routes) =>
      <TableView
        style={{ flex: 1 }}
        tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
      >
        <Section>
            <Item
              key={1}
              accessoryType={TableView.Consts.AccessoryType.DisclosureIndicator}
              onPress={() => {
                props.navigator.push(routes.waitFor);
              }}
              >
              {'Wait for ...'}
            </Item>

        </Section>
      </TableView>
    } />
  );
}

export default HomeScreenNavigation;
