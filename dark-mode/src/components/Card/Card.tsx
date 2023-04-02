import classes from "./Card.module.css";

type Children = {
  children: React.ReactNode;
};

export default function Card({ children }: Children) {
  return <div className={classes.card}>{children}</div>;
}
