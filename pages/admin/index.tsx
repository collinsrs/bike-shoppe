import Container from "components/Container";
import { getSession } from "next-auth/react";
import { setCookie, getCookie } from 'cookies-next';
import { IconAlertCircle } from '@tabler/icons';
import UserTable from "components/UserTable";
import { useState } from 'react';


export default function Admin(props) {
    return (
        <Container title='Admin'>
            <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    Admin Panel
                </h1>
                <div>
                    <h4 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
                        Users
                    </h4>
                <UserTable />
                </div>
            </div>
        </Container>
    )

}

async function LoginModal(props) {
    const [open, setOpen] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const session = props.session;
    const adminToken = props.adminToken;

    const validatePassword = async () => {
        if (password === adminToken) {
            setOpen(false);
        } else {
            setError(true);
            setErrorMessage('Incorrect password.');
        }

        return (
            <>
            <Modal
              opened={open}
              onClose={() => setOpen(false)}
              title="Authenticate to continue"
            >
              <Group position="center">
                  <PasswordInput
                      label="Password"
                      value={password}
                      onChange={(event) => setPassword(event.currentTarget.value)}
                  />
                  <Button onClick={validatePassword}>Log In</Button>
              </Group>
            </Modal>
            {error && (
                <Alert
                    title="Error"
                    icon={<IconAlertCircle />}
                    color="red"
                    style={{margin: '1rem'}}
                >
                    {errorMessage}
                </Alert>
            )}
            <Group position="center">
              <Button onClick={() => setOpen(true)}>Log In</Button>
            </Group>
          </>
        )
    
}
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    //const adminCookie = getCookie('admin', context.req);
    var adminToken: string;
    if (!session) {
        return {
        redirect: {
            destination: "/api/auth/signin",
            permanent: false,
        },
        };
    } else if (session.user.adminAccessToken == undefined == null) {
        return {
        redirect: {
            destination: "/api/auth/signin",
            permanent: false,
        },
        };
    } else {
        adminToken = session.user.adminAccessToken;
    }
    
    return {
        props: { session, adminToken },
    };
    }


