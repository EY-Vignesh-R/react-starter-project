import "./User.css";
const Users = (props) => {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email ID</th>
        </tr>
        {props.userDetails.map((x) => {
          return (
            <tr key={x.id}>
              <td>{x.name}</td>
              <td>{x.age}</td>
              <td>{x.gender}</td>
              <td>{x.emailId}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Users;
