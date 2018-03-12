import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import TableView from 'react-native-tableview'
const { Section, Item } = TableView;

const WaitingsList = ({ add, items }) => {
  return (
    <TableView
      editing={false}
      style={{ flex: 1 }}
      tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
      tableViewStyle={TableView.Consts.Style.Grouped}
    >
      <Section canMove canEdit label={'My saved waitings'}>
        {
          items.map(item => {
            return (
              <Item
                key={item.title}
                onPress={() => {
                  add('new one');
                }}
              >
                {item.title}
              </Item>
            );
          }
          )
        }
      </Section>
    </TableView>
  );
}

export default WaitingsList;
