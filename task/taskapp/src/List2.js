import UsersList from "./UsersList";

function List2(props) {
  const Data = [
    {
      id: Math.random().toString(),
      name: {
        salutation: "Mr.",
        first: "Justin",
        last: "Patel",
      },
    },
    {
      id: Math.random().toString(),
      name: {
        salutation: "Mrs.",
        first: "Agatha",
        last: "Shah",
      },
    },
    {
      id: Math.random().toString(),
      name: {
        salutation: "Mr.",
        first: "Darshan",
        last: "Gajjar",
      },
    },
    {
      id: Math.random().toString(),
      name: {
        salutation: "Mrs.",
        first: "Vanshika",
        last: "Vekariya",
      },
    },
    {
      id: Math.random().toString(),
      name: {
        salutation: "Mr.",
        first: "Dev",
        last: "Patil",
      },
    },
    {
      id: Math.random().toString(),
      name: {
        salutation: "Mrs.",
        first: "Joaquin",
        last: "Phoenix",
      },
    },
    {
      id: Math.random().toString(),
      name: {
        salutation: "Mr.",
        first: "Robert",
        last: "Downey",
      },
    },
    {
      id: Math.random().toString(),
      name: {
        salutation: "Mrs.",
        first: "Joker",
        last: "Batman",
      },
    },
  ];

  
 const outputUserList2 = Data.filter((item) => {
   return (
      item.name.salutation.toLowerCase().startsWith(props.searchVal) ||
      item.name.first.toLowerCase().startsWith(props.searchVal) ||
      item.name.last.toLowerCase().startsWith(props.searchVal)
    );
 });

  // setOutputUserList2('ssssssssss');
  return (
    <div>
      <UsersList outputUsersList={outputUserList2} />
    </div>
  );
}

export default List2;
