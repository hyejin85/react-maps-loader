import ReactMap, { ReactMapProps } from '@/common/lib/ReactMap';

type NaverMapProps = Omit<ReactMapProps<'naver'>, 'type'>;

const NaverMap = (props: NaverMapProps) => {
  return (
    <ReactMap<'naver'>
      type="naver"
      {...props}
    />
  );
};

export default NaverMap;
