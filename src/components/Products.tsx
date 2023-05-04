import { signIn, useSession } from "next-auth/react";
import { Key, Suspense, useRef, useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import fetcher from "~/lib/fetcher";
import { FormState } from "~/lib/form";
import ErrorMessage from "./ErrorMessage";
import Form from "./Form";
import LoadingSpinner from "./LoadingSpinner";
import SuccessMessage from "./SuccessMessage";

// const entry = {
//   id: 1,
//   body: "test",
//   created_by: "Joshua Vaughn",
//   created_at: "2021-08-01T00:00:00.000Z",
// };

// const fallbackData = (
//   <div className="flex flex-col space-y-2">
//     <div className="dark:prose-dark prose w-full break-words">
//       <p>
//         <strong>Joshua Vaughn</strong> is a software engineer and writer living
//         in the Pacific Northwest.
//       </p>
//       <p>
//         He is currently working on <a href="https://www.inkandfeet.com">Ink & Feet</a>, a
//         writing community for people who want to write more.
//       </p>
//       <p>
//         He is also working on <a href="https://www.inkandfeet.com">Ink & Feet</a>, a
//         writing community for people who want to write more.
//       </p>
//       <p>
//         He is also working on <a href="https://www.inkandfeet.com">Ink & Feet</a>, a
//         writing community for people who want to write more.
//       </p>
//       <p>
//         He is also working on <a href="https://www.inkandfeet.com">Ink & Feet</a>, a
//         writing community for people who want to write more.
//       </p>
//       <p>
//         He is also working on <a href="https://www.inkandfeet.com">Ink & Feet</a>, a
//         writing community for people who want to write more.
//       </p>
//     </div>
//     <div className="flex items-center space-x-3">
//       <p className="text-sm text-gray-500">Joshua Vaughn</p>
//       <span className=" text-gray-200 dark:text-gray-800">/</span>
//       <p className="text-sm text-gray-400 dark:text-gray-600">
//         {formatISO(new Date(entry?.created_at), { representation: "date" })}
//       </p>
//     </div>
//   </div>
// );

const GuestbookEntry = ({ entry, user }: { entry: any; user?: any }) => {
  const { mutate } = useSWRConfig();
  // const [form, setForm] = useState<FormState>({ state: "pending" });
  // const inputEl = useRef(null) as any;
  // const { data: entries } = useSWR('/api/guestbook', fetcher, {
  //   fallbackData
  // });

  const deleteEntry = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    await fetch(`/api/guestbook/${entry.id}`, {
      method: "DELETE",
    });

    mutate("/api/guestbook").then(() => {
      window.scrollTo(0, 0);
    });
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="dark:prose-dark prose w-full break-words">
        {entry?.body}
      </div>
      <div className="flex items-center space-x-3">
        <p className="text-sm text-gray-500">{entry?.created_by}</p>
        <span className=" text-gray-200 dark:text-gray-800">/</span>
        <p className="text-sm text-gray-400 dark:text-gray-600">
          {/* {formatISO(new Date(entry?.created_at), { representation: "date" })} */}
        </p>
        {user && entry?.created_by === user.name && (
          <>
            <span className="text-gray-200 dark:text-gray-800">/</span>
            <button
              className="text-sm text-red-600 dark:text-red-400"
              onClick={deleteEntry}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default function Products({
  fallbackData,
}: {
  fallbackData: string | string[] | Key | Key[];
}) {
  const { data: session } = useSession();
  const { mutate } = useSWRConfig();
  const [form, setForm] = useState<FormState>({ state: "pending" });
  const inputEl = useRef(null);
  const { data: entries } = useSWR("/api/guestbook", fetcher, {
    fallbackData,
  });

  const leaveEntry = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setForm({ state: "idle" });

    const res = await fetch("/api/guestbook", {
      body: JSON.stringify({
        body: "test",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: "error",
        message: error,
      });
      return;
    }

    mutate("/api/guestbook");
    setForm({
      state: "success",
      message: `Hooray! Thanks for signing up for the Whitelist.`,
    });
  };

  return (
    <>
      <div className="dark:bg-blue-opaque my-4 w-full rounded border border-blue-200 bg-blue-50 p-6 dark:border-gray-800">
        <h5 className="text-lg font-bold text-gray-900 dark:text-gray-100 md:text-xl">
          Sign up for the Whitelist
        </h5>
        <p className="my-1 text-gray-800 dark:text-gray-200">
          Get notified when we launch.
        </p>
        {session && (
          <form className="relative my-4" onSubmit={leaveEntry}>
            <input
              ref={inputEl}
              aria-label="Your message"
              placeholder="Your message..."
              required
              className="mt-1 block w-full rounded-md border-gray-300 bg-white py-2 pl-4 pr-32 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full w-28 rounded bg-blue-500 font-bold text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
            >
              Sign up
            </button>
          </form>
        )}

        {!session && (
          <a
            href="/api/auth/signin/github"
            className="my-4 flex h-8 w-28 items-center justify-center rounded bg-gray-200 font-bold text-gray-900 dark:bg-gray-700 dark:text-gray-100"
            onClick={(e) => {
              e.preventDefault();
              signIn("github");
            }}
          >
            Login
          </a>
        )}
        {session?.user && (
          <form className="relative my-4" onSubmit={leaveEntry}>
            <input
              ref={inputEl}
              aria-label="Your message"
              placeholder="Your message..."
              required
              className="mt-1 block w-full rounded-md border-gray-300 bg-white py-2 pl-4 pr-32 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
            />
            <button
              className="absolute right-1 top-1 flex h-8 w-28 items-center justify-center rounded bg-gray-100 px-4 pt-1 font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-100"
              type="submit"
            >
              {form.state ? <LoadingSpinner /> : "Sign"}
            </button>
          </form>
        )}
        {form.state ? (
          <ErrorMessage>{form.message}</ErrorMessage>
        ) : form.state === Form ? (
          <SuccessMessage>{form.message}</SuccessMessage>
        ) : (
          <p className="text-sm text-gray-800 dark:text-gray-200">
            Your information is only used to display your name and reply by
            email.
          </p>
        )}
      </div>
      <div className="mt-4 space-y-8">
        <Suspense fallback={fallbackData}>
          <GuestbookEntry entry={entries} user={session?.user} />
        </Suspense>
      </div>
    </>
  );
}
