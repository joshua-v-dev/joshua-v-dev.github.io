import Container from "~/components/Container";
import Whitelist from "~/components/Whitelist";

export default function WhitelistPage() {
  return (
    <Container
      title="Guestbook – Lee Robinson"
      description="Sign my digital guestbook and share some wisdom."
    >
      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Guestbook
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Leave a comment below. It could be anything – appreciation,
          information, wisdom, or even humor. Surprise me!
        </p>
        <Whitelist />
      </div>
    </Container>
  );
}

// export async function getStaticProps() {
//   const entries = await prisma.guestbook.findMany({
//     orderBy: {
//       updated_at: 'desc'
//     }
//   });

// export async function getStaticProps() {
//     const entries = await (await fetch('https://api.github.com/users/joshua-v-dev/repos')).json();
//       orderBy: {
//         updated_at: 'desc'
//       }
//     };

//   const fallbackData = entries.map((entry: { id: { toString: () => any; }; body: any; created_by: { toString: () => any; }; updated_at: { toString: () => any; }; }) => ({
//     id: entry.id.toString(),
//     body: entry.body,
//     created_by: entry.created_by.toString(),
//     updated_at: entry.updated_at.toString()
//   }));

// const fallbackData = await

//   return {
//     props: {
//       fallbackData
//     },
//     revalidate: 60
//   };
// }
