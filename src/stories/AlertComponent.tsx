import "./alertComponent.css";

type Props = {
  title: string;
  text: string;
  color: "red" | "blue";
};

export function AlertComponent({ title, text, color = "red" }: Props) {
  return (
    <div className={`wrapper ${color}`}>
      <p className="title">{title}</p>
      <p className="text">{text}</p>
    </div>
  );
}
