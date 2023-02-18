import {useQuery} from '@apollo/client';
import { Table, LoadingOverlay, Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';
import { GetRequests } from 'graphql/queries';
import Link from "next/link";


export default function RequestTable() {
    const { loading, error, data } = useQuery(GetRequests);
    
    if (loading) return <LoadingOverlay visible={true} />;
    if (error) return <Alert icon={<IconAlertCircle size={16}/>} title='An error occurred fetching this content.' color="red">{error.message}</Alert>;

    const columns = [
        {title: 'ID', dataIndex: 'id'},
        {title: 'Requested URI' , dataIndex: 'url'},
        {title: 'Request Method', dataIndex: 'requestMethod'},
        {title: 'IP Address', dataIndex: 'remoteUser'},
        {title: 'Status Code', dataIndex: 'statusCode'},
        {title: 'Timestamp', dataIndex: 'timestamp'},
        {title: 'User Agent', dataIndex: 'userAgent'},
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
                    <th>Requested URI</th>
                    <th>Request Method</th>
                    <th>IP Address</th>
                    <th>Status Code</th>
                    <th>Timestamp</th>
                    <th>User Agent</th>
                </tr>
            </thead>
            <tbody>
                {data.allRequests.map((request) => (
                    <tr key={request.id}>
                        <td>
                            <Link href={`/admin/request/${request.id}`}>
                                <a>{request.id}</a>
                            </Link>
                        </td>
                        <td>{request.url}</td>
                        <td>{request.requestMethod}</td>
                        <td>{request.remoteUser}</td>
                        <td>{request.statusCode}</td>
                        <td>{request.timestamp}</td>
                        <td>{request.userAgent}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}



