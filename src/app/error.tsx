'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className='flex flex-col items-center min-h-screen justify-center'>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
