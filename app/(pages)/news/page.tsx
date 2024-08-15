export default function NewsPage() {
  return (
    <article className='flex-col space-y-8'>
      <h1 className='text-3xl font-extrabold sm:text-5xl lg:text-7xl'>
        Big News
      </h1>
      <div className='prose prose-sm prose-pixel md:prose-base lg:prose-xl prose-th:text-yellow-200 max-w-none'>
        <h2>Coming soon…</h2>
        <p>As soon as I have written some stuff, I will put it here.</p>
      </div>
    </article>
  );
}
