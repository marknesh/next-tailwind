const Record = (props: RecordProps) => {
  const { name, value } = props;

  return (
    <div className=' flex flex-col items-center  justify-center space-y-1 rounded-sm containerBorder px-7 py-2  '>
      <p className='text-yellow-400 text-lg'>{name}</p>
      <p className='text-white  font-extrabold text-6xl'>{value}</p>
    </div>
  );
};

export default Record;
