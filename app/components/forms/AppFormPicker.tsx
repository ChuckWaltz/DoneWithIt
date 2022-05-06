import { useFormikContext } from 'formik';
import AppErrorMessage from '../AppErrorMessage';
import AppPicker from '../AppPicker';

type Props = {
  name: string;
  items: { id: number | string; label: string }[];
  [x: string]: any;
};

const AppFormPicker = ({ name, items, ...otherProps }: Props) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item: any) => setFieldValue(name, item)}
        selectedItem={(values as any)[name as keyof typeof values]}
        {...otherProps}
      ></AppPicker>
      <AppErrorMessage
        error={
          touched[name as keyof typeof touched]
            ? errors[name as keyof typeof errors]
            : ''
        }
      />
    </>
  );
};

export default AppFormPicker;
