import { Formik, FormikBag, FormikHelpers } from 'formik';

type Props = {
  initialValues: any;
  onSubmit: (values: any, { resetForm }: FormikHelpers<any>) => void;
  validationSchema: any;
  children: any;
};

const AppForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: Props) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
