import { ReactMapProps } from '../../common/lib/ReactMap';

type GoogleMapProps = Omit<ReactMapProps<'google'>, 'type'>;
declare const GoogleMap: (props: GoogleMapProps) => import("react").JSX.Element;
export default GoogleMap;
