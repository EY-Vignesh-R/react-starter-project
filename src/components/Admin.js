import './User.css';
const Admin=(props)=>{
   const admin=props.adminDetails 
return(
    <table >
        <tr >
            <th>Name</th>
            <th>Admin Email ID</th>
            <th>Password</th>
        </tr>
        {
            admin.map((x)=>{
                return(
                    <tr key={x.id}>
                        <td>{x.name}</td>
                        <td>{x.adminEmailId}</td>
                        <td>{x.password}</td>
                    </tr>
                );
            })
        }
    </table>
)

}

export default Admin