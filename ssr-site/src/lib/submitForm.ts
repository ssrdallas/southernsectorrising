export async function submitForm(
  formType: string,
  formElement: HTMLFormElement,
): Promise<void> {
  const data: Record<string, string | string[]> = { formType };

  new FormData(formElement).forEach((value, key) => {
    if (key === 'bot-field' || key === 'form-name' || key === 'access_key') return;
    const existing = data[key];
    if (existing !== undefined) {
      data[key] = [...(Array.isArray(existing) ? existing : [existing as string]), value.toString()];
    } else {
      data[key] = value.toString();
    }
  });

  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as { error?: string }).error ?? 'Submission failed');
  }
}
