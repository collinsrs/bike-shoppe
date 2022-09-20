import { useState, useRef, Suspense } from 'react';
import { format } from 'date-fns';
import { signIn, signOut, useSession } from 'next-auth/react';
import useSWR, { useSWRConfig } from 'swr';

import fetcher from 'lib/fetcher';
import { Form, FormState } from 'lib/types';
import SuccessMessage from 'components/SuccessMessage';
import ErrorMessage from 'components/ErrorMessage';
import LoadingSpinner from 'components/LoadingSpinner';



export default function Contact({ fallbackData, props }) {
  const { data: session } = useSession();
  const { mutate } = useSWRConfig();
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef(null);
  const { data: entries } = useSWR('/api/messages', fetcher, {
    fallbackData
  });


  const leaveEntry = async (e) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch('/api/messages', {
      body: JSON.stringify({
        body: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const emailEntry = await fetch(`/api/messages/relay&usd="${session.user.id}"`, {
      body: JSON.stringify({
        sdn: session.user.name,
        data: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: Form.Error,
        message: error
      });
      return;
    }

    inputEl.current.value = '';
    mutate('/api/messages');
    setForm({
      state: Form.Success,
      message: `Thanks for leaving a message! I'll get back to you soon.`
    });
  };

  const isDisabled: boolean = true;

  return (
    <>
      <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
        <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
          Get in touch
        </h5>
        <p className="my-1 text-gray-800 dark:text-gray-200">
          Have a question? Have any ideas for me? Leave a message below..
        </p>
        {!session && (
          // eslint-disable-next-line @next/next/no-html-link-for-pages
          <a
            href="/api/auth/signin"
            className="flex items-center justify-center my-4 font-bold h-8 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Login
          </a>
        )}
        {session && session.user.role === 'RESTRICTED'
          && (
            <div className="flex items-center justify-center my-4 font-bold h-8 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28">
             <p className="text-red-800 dark:text-red-500">
                Your account has been restricted from sending messages due to abuse.
              </p>
              </div>
              )}
        {session?.user && (
          <form className="relative my-4" onSubmit={leaveEntry}>
            <input
              ref={inputEl}
              aria-label="Your message"
              placeholder="Your message..."
              required
              className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
            <button
              className="flex items-center justify-center absolute right-1 top-1 px-4 pt-1 font-medium h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
              type="submit"
            >
              {form.state === Form.Loading ? <LoadingSpinner /> : 'Send'}
            </button>
            <p className='text-center text-gray-800 dark:text-gray-200'>
              You are currently logged in as {session.user.name}
            </p>
            <button className="flex items-center justify-center my-4 font-bold h-8 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28" onClick={() => signOut()}>
              Sign out
            </button>
          </form>
        )}
        {session && session.user.role === 'admin' && (
          <div className="flex items-center justify-center my-4 font-bold h-8 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28">
            <p className="text-green-800 dark:text-green-500">
              Congrats! You're an admin!
            </p>
            </div>
            )}
        {form.state === Form.Error ? (
          <ErrorMessage>{form.message}</ErrorMessage>
        ) : form.state === Form.Success ? (
          <SuccessMessage>{form.message}</SuccessMessage>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            Login using your GitHub or Google account to leave a message. When you log in, I receive your name and email address. This information is secured and will not be sold to or be viewed by any third party.
          </p>
        )}
      </div>
    </>
  );
}



