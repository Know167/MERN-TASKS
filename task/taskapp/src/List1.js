import UsersList from "./UsersList";

function List1(props) {
  const Data = [
    {
      id: Math.random().toString(),
      name: {
        salutation: "Mr.",
        first: "Jatin",
        last: "Patel",
      },
    },
    {
      id: Math.random().toString(),
      name: {
        salutation: "Mrs.",
        first: "Anjali",
        last: "Shah",
      },
    },
    {
      id: Math.random().toString(),
      name: {
        salutation: "Mr.",
        first: "Darsh",
        last: "Gajjar",
      },
    },
    {
      id: Math.random().toString(),
      name: {
        salutation: "Mrs.",
        first: "Ishita",
        last: "Verma",
      },
    },
    {
      id: Math.random().toString(),
      name: {
        salutation: "Mr.",
        first: "Devarsh",
        last: "Prajapati",
      },
    },
    {
      id: Math.random().toString(),
      name: {
        salutation: "Mrs.",
        first: "Justin",
        last: "Trudeau",
      },
    },
    {
      id: Math.random().toString(),
      name: {
        salutation: "Mr.",
        first: "Dwayne",
        last: "Johnson",
      },
    },
    {
      id: Math.random().toString(),
      name: {
        salutation: "Mrs.",
        first: "Janki",
        last: "Barot",
      },
    },
  ];
  const outputUserList1 = Data.filter((item) => {
    return (
      item.name.salutation.toLowerCase().startsWith(props.searchVal) ||
      item.name.first.toLowerCase().startsWith(props.searchVal) ||
      item.name.last.toLowerCase().startsWith(props.searchVal)
    );
  });

  // setOutputUserList1('ssss');
  return (
    <div>
      <UsersList outputUsersList={outputUserList1} />
    </div>
  );
}
export default List1;
