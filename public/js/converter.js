// ここからコードを書いてください

export function setupConverter() {
  const converterForm = document.querySelector(".converter-form");
  const converterimput = document.querySelector(".converter-input");
  const fromUnit = document.querySelector(".converter-from");
  const toUnit = document.querySelector(".converter-to");
  const result = document.querySelector(".converter-result");

  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 },
  ];

  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";

  for (const unit of lengthUnit) {
    fromUnit.innerHTML += `<option value="${unit.base}">${unit.name}</option>`;
    toUnit.innerHTML += `<option value="${unit.base}">${unit.name}</option>`;
  }

  if (fromUnit.options.length > 0) {
    // fromUnit にオプションがあるか確認
    fromUnit.selectedIndex = 0;
  }

  if (toUnit.options.length > 0) {
    // toUnit にオプションがあるか確認
    toUnit.selectedIndex = 1;
  }

  function convert() {
    const value = parseFloat(converterimput.value);

    if (isNaN(value)) {
      result.textContent = "Please enter a valid number.";
      return;
    }

    const fromBase = parseFloat(fromUnit.value);
    const toBase = parseFloat(toUnit.value);

    const convertedValue = (value * fromBase) / toBase;
    result.textContent = `${value} ${
      lengthUnit[fromUnit.selectedIndex].name
    } = ${convertedValue.toFixed(3)} ${lengthUnit[toUnit.selectedIndex].name}`;
  }

  converterForm.addEventListener("input", convert);

  convert();
}
