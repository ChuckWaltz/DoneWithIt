import { FlatList } from 'react-native';
import React, { useState } from 'react';

import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItemDeleteActions from '../components/lists/ListItemDeleteActions';

const initialMessages = [
  {
    id: 1,
    title: 'Hello',
    body: 'This is some really long text that should be truncated to fit the screen and not be too long to be able to scroll to the bottom of the screen. Please scroll to the bottom of the screen to see the full text.',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'Hello 2',
    body: 'Hello there 2',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 3,
    title: 'Hello 3',
    body: 'Hello there 3',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 4,
    title: 'Hello 4',
    body: 'Hello there 4',
    image: require('../assets/mosh.jpg'),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message: { id: number }) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={(itemInfo) => {
        const message = itemInfo.item;
        return (
          <ListItem
            title={message.title}
            description={message.body}
            image={message.image}
            onPress={() => console.log(message.title)}
            renderRightActions={() => (
              <ListItemDeleteActions onPress={() => handleDelete(message)} />
            )}
            showChevron
          />
        );
      }}
      ItemSeparatorComponent={ListItemSeparator}
      refreshing={refreshing}
      onRefresh={() => setMessages(initialMessages)}
    ></FlatList>
  );
};

export default MessagesScreen;
