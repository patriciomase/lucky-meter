import React, { Component } from 'react';

import TableView from 'react-native-tableview'
const { Section, Item } = TableView;

const WeCanWaitForList = ({ current, items, toggleWaiting }) => {
  console.log(items);
  return (
    <TableView
      editing={false}
      style={{ flex: 1 }}
      tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}
      tableViewStyle={TableView.Consts.Style.Grouped}
    >
      <Section canMove canEdit>
        {
          items.map(item => {
            const selected = current.map(i => i.id).includes(item.id);
            const onPress = selected ? () => { } : (item) => { toggleWaiting(item) };
            return (
              <Item
                id={item.id}
                key={item.title}
                onPress={onPress}
                selected={selected}
                title={item.title}
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

export default WeCanWaitForList;
