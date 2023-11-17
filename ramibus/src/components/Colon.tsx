interface Props {
  title: string;
  auto: string[];
}

function Colon({ title, auto }: Props) {
  return (
    <>
      <div className="colon">
        <h2>{title}</h2>
        <ul>
          {auto.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Colon;
