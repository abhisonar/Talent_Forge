export function toastSuccessMessage(toast, message = '') {
  toast({
    variant: 'success',
    title: message || 'Saved Successfully',
  });
}

export function toastErrorMessage(toast, message = '') {
  toast({
    variant: 'destructive',
    title: message || 'Something went wrong',
  });
}

export function toastApiErrorMessage(toast, err) {
  let errorMessage = '';
  switch (err?.response?.status) {
    case 500:
      errorMessage = 'Internal Server Error';
      break;
    case 400:
      errorMessage = err?.response?.data?.message;
      break;
    default:
      errorMessage = 'Something Went Wrong';
      break;
  }
  toast({
    variant: 'destructive',
    title: errorMessage,
  });
}

export function toastMessage(toast, message, variant = 'default') {
  toast({
    variant,
    title: message,
  });
}
