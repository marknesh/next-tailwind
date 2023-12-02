'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className='flex flex-col space-y-4 items-center min-h-[90vh] justify-center'>
      <h2 className='text-2xl'>Something went wrong!</h2>
      <button
        className='whitespace-nowrap cursor-pointer font-semibold hover:bg-gray-800  mt-3 px-3 py-1 bg-gray-900 rounded-full text-white'
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
