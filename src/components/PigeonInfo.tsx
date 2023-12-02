'use server';

const PigeonInfo = () => {
  return (
    <div className='flex items-center  space-x-5'>
      <h1 className='text-white whitespace-nowrap text-3xl font-bold'>
        Blue Jacket
      </h1>

      <div className='w-px h-16 bg-gray-300' />

      <p className='text-yellow-400 text-sm max-w-xs'>
        The champion ace pigeon is determined by the pigeon with the shortest
        accumulated flying time over the season
      </p>
    </div>
  );
};

export default PigeonInfo;
