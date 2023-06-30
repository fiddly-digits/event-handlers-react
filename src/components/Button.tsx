interface Props {
  text: string;
  handleClicked: () => void;
}

export default function Button(props: Props) {
  //   function handleClicked() {
  //     alert('Guau Guau 🐕');
  //   }

  return <button onClick={props.handleClicked}>{props.text}</button>;
}
