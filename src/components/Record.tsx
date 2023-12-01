'use server';

const Record = (props: RecordProps) => {
  const { name, value } = props;

  return (
    <div className=' flex flex-col space-y-1 border border-gray-500 px-3 py-2'>
      <p className='text-yellow-400 text-sm'>{name}</p>
      <p className='text-white font-extrabold text-4xl'>{value}</p>
    </div>
  );
};

export default Record;
