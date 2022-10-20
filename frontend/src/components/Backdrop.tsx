interface BackdropProps {
  onClick: (params: any) => any
}
export default function Backdrop(props: BackdropProps) {
  return (
    <div className="backdrop" onClick={props.onClick} />
  );
}