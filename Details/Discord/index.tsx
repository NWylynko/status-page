import { Box } from '../../components/Box';
import { List } from '../../components/List';
import { ListItem } from '../../components/ListItem';
import styles from "./styles.module.css"
import Image from "next/image"

export const DiscordDetail = async () => {

  const messages = [
    {
      id: "1",
      name: "Bob",
      message: "This is a message yay",
      imageUrl: "https://via.placeholder.com/42.png",
      unread: true
    },
    {
      id: "2",
      name: "Bob",
      message: "This is a long message that is very long",
      imageUrl: "https://via.placeholder.com/42.png",
      unread: false
    },
    {
      id: "3",
      name: "Bob",
      message: "short message",
      imageUrl: "https://via.placeholder.com/42.png",
      unread: true
    }
  ]

  const unreadMessages = messages.filter(({ unread }) => unread).length

  return (
    <Box className={styles.container}>
      <div className={styles.header}>
      <h2>Discord</h2>
      <span>{unreadMessages} Unread</span>
      </div>
      <List>
        {messages.map((message) => (
          <ListItem key={message.id}>
            <div className={styles.item}>
              <Image className={styles.image} src={message.imageUrl} height={42} width={42} alt="user icon" />
              <h3 className={styles.title}>{message.name}</h3>
              <span className={styles.message} style={{ fontWeight: message.unread ? "bold" : "normal" }}>{message.message}</span>
            </div>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}