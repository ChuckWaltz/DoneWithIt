import { useFormikContext } from 'formik';
import AppButton from '../AppButton';

const AppSubmitButton = ({ children, ...otherProps }: { [x: string]: any }) => {
  const { handleSubmit, isValid } = useFormikContext();

  return (
    <AppButton
      onPress={handleSubmit}
      style={{ marginTop: 10 }}
      disabled={!isValid}
      {...otherProps}
    >
      {children}
    </AppButton>
  );
};

export default AppSubmitButton;
