import { ReactMapProps } from '../../common/lib/ReactMap';

type NaverMapProps = Omit<ReactMapProps<'naver'>, 'type'>;
declare const NaverMap: (props: NaverMapProps) => import("react").JSX.Element;
export default NaverMap;
