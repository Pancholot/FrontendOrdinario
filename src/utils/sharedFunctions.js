const copyPhoneNumber = () => {
    const phoneText = "+52 999 235 6600";
    navigator.clipboard.writeText(phoneText).then(() => {
      alert("Número copiado: " + phoneText);
    });
  };

export { copyPhoneNumber}