import ReactMap, { ReactMapProps } from '@/common/lib/ReactMap';

type GoogleMapProps = Omit<ReactMapProps<'google'>, 'type'>;

const GoogleMap = (props: GoogleMapProps) => {
  return (
    <ReactMap<'google'>
      type="google"
      {...props}
    />
  );
};

export default GoogleMap;
