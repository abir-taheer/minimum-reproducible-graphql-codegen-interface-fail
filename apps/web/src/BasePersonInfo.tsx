import { FragmentType, graphql, useFragment } from "./generated";

const BasePersonFragment = graphql(`
  fragment BasePersonFragment on BasePerson {
    id
    name
  }
`);

export type BasePersonInfoProps = {
  basePersonFragment: FragmentType<typeof BasePersonFragment>;
};

export const BasePersonInfo = ({ basePersonFragment }: BasePersonInfoProps) => {
  const person = useFragment(BasePersonFragment, basePersonFragment);

  return (
    <p>
      {person.name} has id ${person.id}
    </p>
  );
};
