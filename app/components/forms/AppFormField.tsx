import { useFormikContext } from "formik";
import AppErrorMessage from "../AppErrorMessage";
import AppTextInput from "../AppTextInput";

type Props = {
  name: string;
  width?: number | string;
  [x: string]: any;
};

const AppFormField = ({ name, width, ...otherProps }: Props) => {
  const { errors, touched, setFieldTouched, handleChange } = useFormikContext();

  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...otherProps}
      ></AppTextInput>
      <AppErrorMessage
        error={
          touched[name as keyof typeof touched]
            ? errors[name as keyof typeof errors]
            : ""
        }
      />
    </>
  );
};

export default AppFormField;
