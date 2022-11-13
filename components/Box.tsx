import styles from "./Box.module.css";

type BoxProps = {
  // height: number;
  // width: number;
  children?: React.ReactNode;
  className?: string;
}

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div className={[className, styles.box].join(' ')} style={{ height: 223 * 1, width: 230 * 1 }}>
      {children}
    </div>
  )
}