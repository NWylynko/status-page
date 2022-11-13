import styles from "./ListItem.module.css"

type ListItemProps = {
  children: JSX.Element
}

export const ListItem = ({ children }: ListItemProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}