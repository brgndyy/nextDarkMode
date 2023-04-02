import classes from "./ContentCard.module.css";

type Children = {
  children: React.ReactNode;
};

export default function ContentCard({ children }: Children) {
  return <div className={classes.content_card}>{children}</div>;
}
