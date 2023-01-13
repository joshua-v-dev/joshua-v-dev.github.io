import Container from "~/components/Container";
import Whitelist from "~/components/Whitelist";

const WhitelistPage = () => {
  return (
    <Container
      title="WhitelistPage – Joshua Vaughn"
      description="Sign my digital guestbook and share some wisdom."
    >
      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Whitelist
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Leave a comment and I will add you to the whitelist.
        </p>
        <Whitelist />
      </div>
    </Container>
  );
}

export default WhitelistPage;

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
