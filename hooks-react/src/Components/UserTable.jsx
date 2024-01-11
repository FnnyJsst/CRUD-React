export default function UserTable() {
    return (
        <div>
            <h2>View users</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tr></tr>
                <tbody>
                    <tr>
                <th scope="row">1</th>
                    <td>Name</td>
                    <td>UserName</td>
                    <td>
                        <button className="btn btn-outline-dark">Edit</button>
                        <button className="btn btn-outline-dark">Delete</button>
                    </td>
                    </tr>
                </tbody>
              
            </table>
        </div>
    )
}