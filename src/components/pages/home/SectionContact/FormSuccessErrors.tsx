"use client";

export interface FormSuccessErrorsProps {
  formResponse: boolean | undefined;
}

const FormSuccessErrors = ({ formResponse }: FormSuccessErrorsProps) => {
  return (
    <>
      {(formResponse === true || formResponse === false) && (
        <>
          {formResponse && <div>Sucesso</div>}
          {!formResponse && <div>Failure</div>}
        </>
      )}
    </>
  );
};

export default FormSuccessErrors;
