import styles from "./List.module.css"

type ListProps = {
  children: JSX.Element[]
}

export const List = ({ children }: ListProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}