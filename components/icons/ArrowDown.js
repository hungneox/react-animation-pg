const ArrowDown = ({onPress}) => (
  <svg
    fill='none'
    stroke-linecap='round'
    stroke-linejoin='round'
    stroke-width='2'
    stroke='currentColor'
    viewBox='0 0 24 24'
    width="24px" height="24px" 
  >
    <path onPress={onPress}  d='M19 9l-7 7-7-7'></path>
  </svg>
);

export default ArrowDown;
