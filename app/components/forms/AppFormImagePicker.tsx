import { useFormikContext } from 'formik';
import AppErrorMessage from '../AppErrorMessage';
import ImageList from '../lists/ImageList';
import { ImageType } from '../types/image-item.model';

type Props = {
  name: string;
};

const AppFormImagePicker = ({ name }: Props) => {
  const { errors, setFieldValue } = useFormikContext();

  return (
    <>
      <ImageList
        onChangeImages={(images: ImageType[]) => {
          setFieldValue(name, images);
        }}
      ></ImageList>
      <AppErrorMessage error={errors[name as keyof typeof errors]} />
    </>
  );
};

export default AppFormImagePicker;
