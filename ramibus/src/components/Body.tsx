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

  let descMetropolitane = [
    "The M11 troleybus goes from Timisoara to Ghiroda, and it's beautifull!",
    "The M14 bus goes from Timisoara to Dumbravita, but back in the days it went further.",
    "The M22 bus goes to Mosnita.",
    "The M27 bus goes to Ianova.",
    "The M29 bus goes from Timisoara to Ghiroda, but unlike M11 it works on diesel and not on electrcity",
    "M30 also goes to Ghiroda, but it goes futher in.",
    "M35 bus connects Timisoara and Giarmata Vii. It has the route right next to the Green Forest, a beautiful sight to see.",
    "M36 goes from Timisoara to Sanmihaiu Roman, a very beautiful village",
    "M37 connects Timisoara and Parta.",
    "M38 connects Jebel with Timisoara.",
    "M41 connects Timisoara with Carani, a very beautiful city",
    "M42 connects Timisoara with Covaci, a very nice village, where you can go for a bath in Annette Resort.",
    "M43 connects Timisoara with Beregsau Mic",
    "M44 connects Timisoara with Dudesti",
    "M45 connects Timisoara to Dumbravita. This bus is smaller in size but has a very nice route, that goes through all Dumbravita.",
    "M46 connects Sag with timisoara.",
    "M47 connects Hodoni with Timisoara.",
    "M48 connects Seceani with Timisoara.",
    "M49 connects Giarmata with Timisoara, it also has a route throungh Dumbravita and Cernateaz.",
    "M50 connects Timisoara with Sandra. This bus also goes through Biled.",
    "M51 connects Padureni with Timisoara. In Padureni you can visit the forest.",
    "M52 connects Varias with Timisoara.",
  ];

  let descUrbane = [
    "4b is a bus that connects Piata 700 with Grigore Alexandrescu.",
    "5 connects Piata 700 with IML",
    "6 connects Piata Nicolae Balcescu with Str. Cerna",
    "13 connects Spital Militar with Pasaj CF",
    "21 connects Traian Grozavescu with Sc. Plopi",
    "23 connects Gara  de EST with Buziasului",
    "28 connects V.Economu with Țițeica",
    "32 connects Mocioni with Gara de Sud",
    "33 connects Catedrala with Pod C.Sagului",
    "40 connects Grozavescu with Stuparilor",
    "46 connects Bastion with Muzeul Satului",
    "E1 connects Pod C. Sagului with Tristan Tzara",
    "E2 connects Continental with Holdelor",
    "E3 connect Apicultorilor with ELBA",
    "E4 connects Bastion with Aeroport",
    "E4b connects Baritiu with Aeroport",
    "E6 connects Oituz with PITT",
    "E7 connects T.Grozavescu with Comtim",
    "E8 connects Scoala Plopi with Pod C. Sagului",
  ];

  let descTramvaie = [
    "11 is a trolleybus that has the same route as M11 but doesn't enter Ghiroda.",
    "14 is the most popular trolleybus, everyone uses it to go from Ion Ionescu to Gara de Nord",
    "15 is a trolleybus that goes through Timisoara",
    "16 is a trolleybus that goes through Timisoara",
    "17 goes to Agronomie",
    "18 is just like 17 but has a different route, they both go to Agronomie",
    "1 is a tram that goes trough the center of Timisoara",
    "2 is a tram that goes trough the center of Timisoara",
    "6a is a tram that goes trough the center of Timisoara",
    "6b is a tram that goes trough the center of Timisoara",
    "7a is a preety old tram that needs reconditioning",
    "7b is a preety old tram that needs reconditioning",
    "8 is a preety old tram that needs reconditioning",
    "9 is a preety old tram that needs reconditioning ",
  ];

  let metropolitaneImg = [
    "metropolitane",
    "metropolitane",
    "metropolitane",
    "metropolitane",
    "metropolitane",
    "metropolitane",
    "metropolitane",
    "metropolitane",
    "metropolitane",
    "metropolitane",
    "metropolitane",
    "metropolitane",
    "metropolitane",
    "metropolitane",
    "metropolitane",
    "metropolitane",
    "metropolitane",
    "metropolitane",
    "metropolitane",
    "metropolitane",
    "metropolitane",
    "metropolitane",
  ];

  let urbaneImg = [
    "urbane",
    "urbane",
    "urbane",
    "urbane",
    "urbane",
    "urbane",
    "urbane",
    "urbane",
    "urbane",
    "urbane",
    "urbane",
    "urbane",
    "urbane",
    "urbane",
    "urbane",
    "urbane",
    "urbane",
    "urbane",
    "urbane",
  ];

  let tramvaieImg = [
    "firobuze",
    "firobuze",
    "firobuze",
    "firobuze",
    "firobuze",
    "firobuze",
    "tramvaie",
    "tramvaie",
    "tramvaie",
    "tramvaie",
    "tramvaie",
    "tramvaie",
    "tramvaie",
    "tramvaie",
  ];

  return (
    <>
      <div className="body">
        <Colon
          desc={descMetropolitane}
          title="Metropolitan Lines"
          auto={metropolitane}
          imgs={metropolitaneImg}
        ></Colon>
        <Colon
          desc={descUrbane}
          title="Urban Lines"
          auto={urbane}
          imgs={urbaneImg}
        ></Colon>
        <Colon
          desc={descTramvaie}
          title="Trams and Trolleybuses"
          auto={tramvaie}
          imgs={tramvaieImg}
        ></Colon>
      </div>
    </>
  );
}

export default Body;
