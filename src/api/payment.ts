export type RegistrationFormData = {
  name: string;
  mobile: string;
  email: string;
  city: string;
  experience: string;
};

export async function appendForm(
  formData: RegistrationFormData
): Promise<void> {
  const baseUrl =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:5001";
  const endpoint = `${baseUrl}/api/payment/append-form`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ formData }),
    mode: "cors", // your backend now controls CORS
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();
  if (data?.paymentLink) {
    // Instead of fetch redirect, perform full browser redirect
    window.location.href = data.paymentLink;
  } else {
    throw new Error("Payment link missing from server response");
  }
}
