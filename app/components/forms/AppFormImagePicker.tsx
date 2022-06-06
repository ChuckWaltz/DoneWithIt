import { useFormikContext } from 'formik';
import AppErrorMessage from '../AppErrorMessage';
import ImageInputList from '../lists/ImageInputList';
import { ImageType } from '../types/image-item.model';

type Props = {
  name: string;
};

const AppFormImagePicker = ({ name }: Props) => {
  const { errors, setFieldValue } = useFormikContext();

  return (
    <>
      <ImageInputList
        onChangeImages={(images: ImageType[]) => {
          setFieldValue(name, images);
        }}
      ></ImageInputList>
      <AppErrorMessage error={errors[name as keyof typeof errors]} />
    </>
  );
};

export default AppFormImagePicker;
