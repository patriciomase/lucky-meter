import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import TableView from 'react-native-tableview'
const { Section, Item } = TableView;

const WaitingsList = ({ editingWaitingsList, waitingsList }) => {
  console.log('editing', editingWaitingsList)
  return (
    <TableView
      editing={editingWaitingsList}
      style={{ flex: 1 }}
      tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
      tableViewStyle={TableView.Consts.Style.Grouped}
    >
      <Section canMove canEdit label={'My saved waitings'}>
        {
          waitingsList.map(item => {
            return (
              <Item
                key={item.title}
                onPress={() => {}}
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
