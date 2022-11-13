import styles from "./Box.module.css";

type BoxProps = {
  // height: number;
  // width: number;
  children?: React.ReactNode;
}

export const Box = ({ children }: BoxProps) => {
  return (
    <div className={styles.box} style={{ height: 223 * 1, width: 230 * 1 }}>
      {children}
    </div>
  )
}