export interface FieldErrorsProps {
  errors?: string[];
}

const FieldErrors = ({ errors }: FieldErrorsProps) => {
  if (!errors) return <></>;

  return (
    <>
      {errors?.map((error, i) => (
        <small key={i} className="text-red-500">
          {error}
        </small>
      ))}
    </>
  );
};

export default FieldErrors;
