import { useState } from 'react';

export default function StudentForm({ initialData = {}, onSubmit }) {
  const [formData, setFormData] = useState({
    id: initialData.id || '',
    nombre: initialData.nombre || '',
    apellido: initialData.apellido || '',
    curso: initialData.curso || '',
    email: initialData.email || '',
    domicilio: initialData.domicilio || '',
    telefono: initialData.telefono || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 border rounded">
      {Object.entries(formData).map(([key, value]) => (
        <input
          key={key}
          type="text"
          name={key}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          value={value}
          onChange={handleChange}
          className="w-full p-2 border"
          required={['id', 'nombre', 'apellido', 'curso', 'email'].includes(key)}
        />
      ))}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Guardar
      </button>
    </form>
  );
}
