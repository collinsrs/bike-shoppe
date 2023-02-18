import {useQuery} from '@apollo/client';
import { Table, LoadingOverlay, Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';
import { GetUsers } from 'graphql/queries';
import Link from "next/link";


export default function UserTable() {
    const { loading, error, data } = useQuery(GetUsers);
    
    if (loading) return <LoadingOverlay visible={true} />;
    if (error) return <Alert icon={<IconAlertCircle size={16}/>} title='An error occurred fetching this content.' color="red">{error.message}</Alert>;

    const columns = [
        { title: 'Name', dataIndex: 'name' },
        { title: 'Email', dataIndex: 'email' },
        { title: 'Email Verified', dataIndex: 'emailVerified' },
        { title: 'Role', dataIndex: 'Role' }
    ];

    const rows = columns.map((column) => (
        <tr key={column.title}>
            <th>{column.title}</th>
            <td>{column.dataIndex}</td>
        </tr>
    ));

    return (
        <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Email Verified</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {data.allUsers.map((user) => (
                    <tr key={user.id}>
                        <td>
                            <Link legacyBehavior href={`/admin/user/${user.id}`}>
                                <a>{user.id}</a>
                            </Link>
                        </td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.emailVerified}</td>
                        <td>{user.Role}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
