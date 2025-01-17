import "./pillComponent.css";

type Props = {
  label: string;
};

export function PillComponent({ label }: Props) {
  return <div>{label}</div>;
}
