import { notFound } from 'next/navigation';

export default async function Page({ params }) {
  const { slug } = params;

  // Simulate fetching data
  const data = await fetchData(slug);

  // If no data is found, trigger the not-found page
  if (!data) {
    notFound();
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

// Simulated data-fetching function
async function fetchData(slug) {
  const database = {
    'valid-slug': { title: 'Valid Title', description: 'Valid Description' },
  };
  return database[slug] || null;
}
