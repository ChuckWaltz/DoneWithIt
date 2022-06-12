import { useFormikContext } from "formik";
import AppErrorMessage from "../AppErrorMessage";
import AppTextInput from "../AppTextInput";

type Props = {
  name: string;
  width?: number | string;
  [x: string]: any;
};

const AppFormField = ({ name, width, ...otherProps }: Props) => {
  const { errors, setFieldValue, touched, setFieldTouched, values } =
    useFormikContext();

  return (
    <>
      <AppTextInput
        onChangeText={(text: any) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        value={(values as any)[name]}
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
