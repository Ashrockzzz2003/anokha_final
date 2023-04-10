const rawHTML = localStorage.getItem("payUHTML")

const PayURedirect = () => {
  return (
      <div dangerouslySetInnerHTML={{ __html: rawHTML }}>
        
      </div>
  );
};

export default PayURedirect;