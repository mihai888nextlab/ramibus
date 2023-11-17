import Colon from "./Colon";

function Body() {
  let metropolitane = [
    "M11 - Timisoara - Ghiroda",
    "M14 - Timisoara - Dumbravita",
    "M22 - Timisoara - Mosnita",
    "M27 - Timisoara - Ianova",
    "M29 - Timisoara - Ghiroda",
    "M30 - Bastion - Ghiroda",
    "M35 - Timisoara - Giarmata Vii",
    "M36 - Timisoara - Smnh. Roman",
    "M37 - Timisoara - Parta",
    "M38 - Timisoara - Jebel/Cruceni",
    "M41 - Timisoara - Carani",
    "M42 - Timisoara - Covaci",
    "M43 - Timisoara - Beregsau Mic",
    "M44 - Timisoara - Dudesti",
    "M45 - Timisoara - Dumbravita",
    "M46 - Timisoara - Sag",
    "M47 - Timisoara - Hodoni",
    "M48 - Timisoara - Seceani",
    "M49 - Timisoara - Giarmata",
    "M50 - Timisoara - Sandra",
    "M51 - Timisoara - Padureni",
    "M52 - Timisoara - Varias",
  ];

  let urbane = [
    "4b - 700 - Gr. Alexandrescu",
    "5 - P-ta 700 - IML",
    "6 - Piata Balcescu - Str. Cerna",
    "13 - Spital Militar - Pasaj CF",
    "21 - Grozavescu - Sc. Plopi",
    "23 - Gara  de EST - Buziasului",
    "28 - V.Economu - Țițeica",
    "32 - Mocioni - Gara de Sud",
    "33 - Catedrala - Pod C.Sagului",
    "40 - Grozavescu - Stuparilor",
    "46 - Bastion - Muzeul Satului",
    "E1 - Pod C. Sagului - Tristan Tzara",
    "E2 - Continental - Holdelor",
    "E3 - Apicultorilor - ELBA",
    "E4 - Bastion - Aeroport",
    "E4b - Baritiu - Aeroport",
    "E6 - Oituz - PITT",
    "E7 - T.Grozavescu - Comtim",
    "E8 - Scoala Plopi - Pod C. Sagului",
  ];

  let tramvaie = [
    "11 (trolleybus)",
    "14 (trolleybus)",
    "15 (trolleybus)",
    "16 (trolleybus)",
    "17 (trolleybus)",
    "18 (trolleybus)",
    "1 (tram)",
    "2 (tram)",
    "6a (tram)",
    "6b (tram)",
    "7a (tram)",
    "7b (tram)",
    "8 (tram)",
    "9 (tram)",
  ];
  return (
    <>
      <div className="body">
        <Colon title="Metropolitan Lines" auto={metropolitane}></Colon>
        <Colon title="Urban Lines" auto={urbane}></Colon>
        <Colon title="Trams and Trolleybuses" auto={tramvaie}></Colon>
      </div>
    </>
  );
}

export default Body;
