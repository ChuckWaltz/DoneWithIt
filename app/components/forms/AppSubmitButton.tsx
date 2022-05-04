import { useFormikContext } from "formik";
import AppButton from "../AppButton";

const AppSubmitButton = ({ ...otherProps }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton onPress={handleSubmit} style={{ marginTop: 10 }} {...otherProps}>
      Login
    </AppButton>
  );
};

export default AppSubmitButton;
