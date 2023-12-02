'use server';

const PigeonInfo = () => {
  return (
    <div className='flex flex-col  space-y-3 xl:space-y-0 xl:flex-row  items-center  xl:space-x-5'>
      <h1 className='text-white whitespace-nowrap text-3xl font-bold'>
        Blue Jacket
      </h1>

      <div className='hidden xl:flex w-px h-20 bg-gray-500' />

      <p className='text-yellow-400 text-sm max-w-xs '>
        The champion ace pigeon is determined by the pigeon with the shortest
        accumulated flying time over the season
      </p>
    </div>
  );
};

export default PigeonInfo;
