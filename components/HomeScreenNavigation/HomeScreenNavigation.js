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

const HomeScreenNavigation = (props) => {
  return (
    <TableView
      style={{ flex: 1 }}
      tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
      tableViewStyle={TableView.Consts.Style.Grouped}
    >
      <Section label={'Add new'}>
        <Item
          key={1}
          accessoryType={TableView.Consts.AccessoryType.DisclosureIndicator}
          onPress={() => {props.navigation.navigate('WaitForScreen')}}
        >
          {'Wait for ...'}
        </Item>

        <Item
          key={2}
          accessoryType={TableView.Consts.AccessoryType.DisclosureIndicator}
          onPress={() => {}}
        >
          {'Enter code manually'}
        </Item>
      </Section>

      <Section label={'Saved'}>
        <Item
          key={3}
          accessoryType={TableView.Consts.AccessoryType.DisclosureIndicator}
          onPress={() => { props.navigation.navigate('waitingsList') }}
        >
          {'See what I\'m waiting for'}
        </Item>
      </Section>

      <Section label={'Explore'}>
        <Item
          key={4}
          accessoryType={TableView.Consts.AccessoryType.DisclosureIndicator}
          onPress={() => {}}
        >
          {'See more things to wait for'}
        </Item>
      </Section>
    </TableView>
  );
}

export default HomeScreenNavigation;
