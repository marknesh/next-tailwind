const WindDetails = (props: WindDetailsProps) => {
  const { Icon, value, windProperty, windPropertyUnit } = props;

  return (
    <div className='flex items-center space-x-3 '>
      <Icon className={'text-[20px] text-white'} />
      <p className='text-white font-extrabold text-2xl'>{value}</p>
      <div>
        <p className='text-gray-400 text-[10px]'>{windPropertyUnit}</p>
        <p className='text-gray-100 text-sm'>{windProperty}</p>
      </div>
    </div>
  );
};

export default WindDetails;
