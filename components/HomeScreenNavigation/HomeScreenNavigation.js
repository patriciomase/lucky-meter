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
    <AppRoutesProvider passProps={props.passProps}>
      {(routes) =>
        <TableView
          style={{ flex: 1 }}
          tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
          tableViewStyle={TableView.Consts.Style.Grouped}
        >
          <Section label={'Add new'}>
            <Item
              key={1}
              accessoryType={TableView.Consts.AccessoryType.DisclosureIndicator}
              onPress={() => props.navigator.push(routes.waitFor)}
            >
              {'Wait for ...'}
            </Item>

            <Item
              key={2}
              accessoryType={TableView.Consts.AccessoryType.DisclosureIndicator}
              onPress={() => props.navigator.push(routes.enterManually)}
            >
              {'Enter code manually'}
            </Item>
          </Section>

          <Section label={'Saved'}>
            <Item
              key={3}
              accessoryType={TableView.Consts.AccessoryType.DisclosureIndicator}
              onPress={() => props.navigator.push(routes.waitingsList)}
            >
              {'See what I\'m waiting for'}
            </Item>
          </Section>

          <Section label={'Explore'}>
            <Item
              key={4}
              accessoryType={TableView.Consts.AccessoryType.DisclosureIndicator}
              onPress={() => props.navigator.push(routes.seeMore)}
            >
              {'See more things to wait for'}
            </Item>
          </Section>

          <Section label={'SASasa'}>
            {
              props.passProps.waitingsList.map(item => {
                return (
                  <Item
                    key={item.title}
                    accessoryType={TableView.Consts.AccessoryType.DisclosureIndicator}
                    onPress={() => props.navigator.push(routes.seeMore)}
                  >
                    {item.title}
                  </Item>
                );
              }
              )
            }
          </Section>
        </TableView>
      }
    </AppRoutesProvider>
  );
}

export default HomeScreenNavigation;
