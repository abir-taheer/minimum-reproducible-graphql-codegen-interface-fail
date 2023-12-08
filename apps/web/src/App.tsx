import { useQuery } from "@apollo/client";
import { BasePersonInfo } from "./BasePersonInfo.tsx";
import { graphql } from "./generated";

export const PeopleQuery = graphql(`
  query PeopleQuery {
    people {
      # Separating them for the purpose of this example because of a real-life use-case
      ... on Employee {
        ...BasePersonFragment
      }

      # Separating them for the purpose of this example because of a real-life use-case
      ... on Customer {
        ...BasePersonFragment
      }

      # id for react-keys
      ... on BasePerson {
        id
      }
    }
  }
`);

function App() {
  const { data, loading } = useQuery(PeopleQuery);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return (
      <p>
        is the backend running? expecting it to run on http://localhost:4000
      </p>
    );
  }

  return (
    <>
      <p>results:</p>

      {data.people.map((personFragment) => (
        <BasePersonInfo
          key={personFragment.id}
          basePersonFragment={personFragment}
        />
      ))}
    </>
  );
}

export default App;
