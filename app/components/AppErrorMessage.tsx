import AppText from "./AppText";

const AppErrorMessage = ({ error }: { error?: string }) => {
  if (!error) return null;

  return (
    <AppText
      style={{ fontSize: 14, color: "tomato", marginBottom: 5, marginLeft: 15 }}
    >
      {error}
    </AppText>
  );
};

export default AppErrorMessage;
