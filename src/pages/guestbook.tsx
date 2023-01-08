import Container from "src/components/Container/Container";
import Guestbook from "src/components/Guestbook/Guestbook";


export default function GuestbookPage({ fallbackData }: { fallbackData: any; }) {
    return (
        <Container
            title="Guestbook – Lee Robinson"
            description="Sign my digital guestbook and share some wisdom."
        >
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    Guestbook
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Leave a comment below. It could be anything – appreciation,
                    information, wisdom, or even humor. Surprise me!
                </p>
                <Guestbook fallbackData={fallbackData} />
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

