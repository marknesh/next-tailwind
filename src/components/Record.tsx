const Record = (props: RecordProps) => {
  const { name, value } = props;

  return (
    <div className=' flex flex-col justify-center space-y-1 border border-gray-300 px-7 py-2'>
      <p className='text-yellow-400'>{name}</p>
      <p className='text-white font-extrabold text-4xl'>{value}</p>
    </div>
  );
};

export default Record;
