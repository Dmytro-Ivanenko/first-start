'use client'; // в ерор сторінці обов'язково вказуємо що рендер на клієнті

export default function ErrorWrapper({ error }: { error: Error }) {
  return <h1> {`Oh, this is Error: ${error.message}`}</h1>;
}
