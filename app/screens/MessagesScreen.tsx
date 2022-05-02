import { FlatList } from "react-native";
import { useState } from "react";

import ListItem from "../components/ListItem";
import ListItemDeleteActions from "../components/ListItemDeleteActions";
import ListItemSeparator from "../components/ListItemSeparator";

const initialMessages = [
  {
    id: 1,
    title: "Hello",
    body: "Hello there",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Hello 2",
    body: "Hello there 2",
    image: require("../assets/mosh.jpg"),
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
