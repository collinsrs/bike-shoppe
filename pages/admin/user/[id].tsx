import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {Modal, Button, TextInput, LoadingOverlay} from '@mantine/core';
import Container from "components/Container";

import { useQuery, useMutation } from "@apollo/client";
import { GetUser } from "graphql/queries";
import { UpdateUser } from "graphql/mutations";
import { signIn } from "next-auth/react";
import { isAdmin } from "pages/api/auth/[...nextauth]";


export default function User(props) {
    const router = useRouter();
    const { id } = router.query;
    const session = useSession();
    const { loading, error, data } = useQuery(GetUser, {
        variables: { userId: id },
    });
    const [updateUser] = useMutation(UpdateUser);

    //navigate back to admin page on close
   const onClose = () => {
        router.push('/admin');
    }

    const parsedData = data && data.User;

    const [opened, setOpened] = useState(true);
    const [name, setName] = useState(parsedData && parsedData.name);
    const [email, setEmail] = useState(parsedData && parsedData.email);
    const [image, setImage] = useState(parsedData && parsedData.image);
    const [Role, setRole] = useState(parsedData && parsedData.Role);
    const [emailVerified, setEmailVerified] = useState(parsedData && parsedData.emailVerified);
    const [disabled, setDisabled] = useState(true);

    if (loading || !data) return <LoadingOverlay visible={true} />;

    if (error) return (
        <Container title='GraphQL API Error'>
           <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            API Error
            </h1>
        <h4 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
            An error occurred while fetching this content.
        </h4>
            <p className="text-gray-500 dark:text-gray-400">
                {error.message}
            </p>
            <Button color='blue' onClick={() => router.push('/admin')}>Back to Admin</Button>
        </Container> );
    
    if (!id) return  (
        <Container title='API Error'>
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            API Error
        </h1>
        <h4 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
            No User ID was provided with this request.
        </h4>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
            Please go back to the previous page and try again. This page can only be accessed via deep links.
        </p>
        <Button color='blue' onClick={() => router.push('/')}>Back to Home</Button>
        </Container>
    )

    if (!session) return  (
        <Container title='401 Unauthorized'>
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Authorization required
        </h1>
        <h4 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
            You must be authenticated to access this resource
        </h4>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
            Please log in to continue.
        </p>
        <Button onClick={() => signIn()}>Log in</Button>
        </div>
        </Container>
    )

    if (isAdmin === false) return  (
        <Container title='403 Forbidden'>
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Access Restricted
        </h1>
        <h4 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
            Your account does not have the nessesary permissions to access this resource.
        </h4>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
            If you believe you have reached this message in error, please contact the web administrator.
            Please do not re-attempt this request, it will generate the same response.
        </p>
        <Button onClick={() => signIn()}>Log in</Button>
        </div>
        </Container>
    )

    return (
        <Modal opened={opened} onClose={onClose} title="User Information">
            <TextInput
                label="Name"
                value={name}
                onChange={(event) => setName(event.currentTarget.value)}
                disabled={disabled}
            />
            <TextInput
                label="Email"
                value={email}
                onChange={(event) => setEmail(event.currentTarget.value)}
                disabled={disabled}
            />
            <TextInput
                label="Image URL"
                value={image}
                onChange={(event) => setImage(event.currentTarget.value)}
                disabled={disabled}
            />
            <TextInput
                label="Role"
                value={Role}
                onChange={(event) => setRole(event.currentTarget.value)}
                disabled={disabled}
            />
            <TextInput
                label="User ID"
                value={data.user.id}
                disabled={true}
            />
            <p>User ID's cannot be changed.</p>
            <Button 
                color={disabled ? 'blue' : 'red'}
                onClick={() => {
                    updateUser({
                        variables: {
                            userId: data.user.id,
                            name: name,
                            email: email,
                            image: image,
                            Role: Role,
                        }
                    });
                    setDisabled(true);
                }}
                disabled={disabled}
            >
                Update User
            </Button>
            <Button
                color={disabled ? 'red' : 'green'}
                onClick={() => {
                    setDisabled(false);
                }}
                disabled={!disabled}
            >
                Edit User
            </Button>
            
        </Modal>
        
    )
    
    
}
