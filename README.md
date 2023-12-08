Codegen doesn't spread the fields correctly when:

- The fragment belongs to an interface
- The spread is happening in a subtype of the interface

Example:

```graphql
fragment BasePersonFragment on BasePerson {
    id
    name
}

query PeopleQuery {
    people {
        ... on Employee {
            ...BasePersonFragment
        }
    }
}
```

The data will not include the `id` and `name` fields from the fragment

