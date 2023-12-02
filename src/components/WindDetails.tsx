const WindDetails = (props: WindDetailsProps) => {
  const { Icon, value, windProperty, windPropertyUnit } = props;

  return (
    <div className='flex space-x-2'>
      <Icon className={'text-[19px] mt-[9px] text-white'} />
      <div className='flex   space-x-3 items-center'>
        <p className='text-white w-[60px] font-extrabold text-center  text-4xl'>
          {value}
        </p>
        <div>
          <p className='text-gray-400 text-[10px]'>{windPropertyUnit}</p>
          <p className='text-gray-100 whitespace-nowrap text-xs'>
            {windProperty}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WindDetails;
