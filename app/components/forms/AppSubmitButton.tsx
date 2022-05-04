import { useFormikContext } from "formik";
import AppButton from "../AppButton";

const AppSubmitButton = ({ children, ...otherProps }: { [x: string]: any }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton onPress={handleSubmit} style={{ marginTop: 10 }} {...otherProps}>
      {children}
    </AppButton>
  );
};

export default AppSubmitButton;
