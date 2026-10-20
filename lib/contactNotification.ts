type NotificationField = {
  label: string;
  value: string;
};

function escapeHtml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

export function createContactNotification(fields: NotificationField[], reference: string) {
  const header = `<b>Новая заявка · TP Digital Lab</b>\nID: ${escapeHtml(reference)}`;
  const messages: string[] = [];
  let current = header;

  for (const field of fields) {
    if (!field.value) continue;
    const parts: string[] = [];
    let part = "";
    for (const character of field.value) {
      const escapedCharacter = escapeHtml(character);
      if (part.length + escapedCharacter.length > 3000) {
        parts.push(part);
        part = "";
      }
      part += escapedCharacter;
    }
    if (part) parts.push(part);

    for (const [index, value] of parts.entries()) {
      const label = `${field.label}${index > 0 ? " (продолжение)" : ""}`;
      const block = `\n\n<b>${escapeHtml(label)}:</b>\n${value}`;
      if (current.length + block.length > 3800) {
        messages.push(current);
        current = header;
      }
      current += block;
    }
  }

  messages.push(current);
  return messages;
}
