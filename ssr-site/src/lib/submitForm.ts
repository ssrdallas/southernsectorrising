const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '';

export async function submitForm(
  formName: string,
  formElement: HTMLFormElement,
): Promise<void> {
  const raw: Record<string, string | string[]> = {};
  new FormData(formElement).forEach((value, key) => {
    if (key === 'bot-field' || key === 'form-name') return;
    const existing = raw[key];
    if (existing !== undefined) {
      raw[key] = [...(Array.isArray(existing) ? existing : [existing as string]), value.toString()];
    } else {
      raw[key] = value.toString();
    }
  });

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      subject: `New ${formName} submission — Southern Sector Rising`,
      from_name: 'SSR Website',
      ...raw,
    }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.message ?? 'Submission failed');
  }
}
