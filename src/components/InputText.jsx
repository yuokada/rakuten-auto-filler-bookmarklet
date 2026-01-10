export function getInputStyles() {
  return 'w-[calc(100%-1rem)] p-2 my-1 box-border border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500';
}

export function InputText({ id, name, type = 'text', placeholder, value, onChange, autoComplete }) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={getInputStyles()}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
    />
  );
}

export function NameInputs({ formData, onChange }) {
  return (
    <div className="flex gap-2">
      {/* name-inputs = flex + gap */}
      <InputText
        type="text"
        id="last_name"
        name="last_name"
        className={getInputStyles()}
        value={formData.last_name}
        onChange={onChange}
        placeholder="姓"
      />
      <InputText
        type="text"
        id="first_name"
        name="first_name"
        className={getInputStyles()}
        value={formData.first_name}
        onChange={onChange}
        placeholder="名"
      />
    </div>
  );
}
export function KanaInputs({ formData, onChange }) {
  /*
      <div className="name-inputs">
      <input
          type="text"
          id="last_name_kana"
          name="last_name_kana"
          className={getInputStyles()}
          value={formData.last_name_kana}
          onChange={handleChange}
          placeholder="セイ"
      />
      <input
          type="text"
          id="first_name_kana"
          name="first_name_kana"
          className={getInputStyles()}
          value={formData.first_name_kana}
          onChange={handleChange}
          placeholder="メイ"
      />
      </div>
  */
  return (
    <div className="flex gap-2">
      <InputText
        type="text"
        id="last_name_kana"
        name="last_name_kana"
        className={getInputStyles()}
        value={formData.last_name_kana}
        onChange={onChange}
        placeholder="セイ"
      />
      <InputText
        type="text"
        id="first_name_kana"
        name="first_name_kana"
        className={getInputStyles()}
        value={formData.first_name_kana}
        onChange={onChange}
        placeholder="メイ"
      />
    </div>
  );
}
export function CompanionNameInput({ formData, onChange }) {
  return (
    <div className="flex gap-2">
      <InputText
        type="text"
        id="companion_last_name"
        name="companion_last_name"
        className={getInputStyles()}
        value={formData.companion_last_name}
        onChange={onChange}
      />
      <InputText
        type="text"
        id="companion_first_name"
        name="companion_first_name"
        className={getInputStyles()}
        value={formData.companion_first_name}
        onChange={onChange}
      />
    </div>
  );
}
