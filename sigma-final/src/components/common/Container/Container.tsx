import styles from "./container.module.scss";

export interface LayoutProps {
  children: React.ReactNode;
}

const Container = ({ children }: LayoutProps) => {
  return <div className={styles.container}>{children}</div>;
};
export default Container;
